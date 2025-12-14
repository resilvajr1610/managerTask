const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");

if (!admin.apps.length) admin.initializeApp();
const db = admin.firestore();

exports.createTaskHttp = onRequest({ region: "us-central1", cors: true }, async (req, res) => {
  try {
    if (req.method !== "POST") return res.status(405).json({ error: "method-not-allowed" });

    const title = String(req.body?.title ?? "").trim();
    const description = String(req.body?.description ?? "").trim();    
    const userId = String(req.body?.userId ?? "").trim();

    if (!title) return res.status(400).json({ error: "title-required" });

    const docRef = await db.collection("tasks").add({
      userId,
      title,
      description,
      status: "todo",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return res.status(200).json({ id: docRef.id });
  } catch (e) {
    return res.status(500).json({ error: "internal" });
  }
});
