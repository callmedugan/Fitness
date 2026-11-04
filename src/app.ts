import express from "express";

const app = express();

app.use(express.json());

/* ========================================================================= */
//                        handlers
/* ========================================================================= */

app.get("/api/health", (_req, res) => {
	res.json({ status: "ok" });
});

export default app;
