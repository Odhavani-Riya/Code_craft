import express from 'express';
import { senEmailController } from '../controllers/portfolioController.js'; // ✅ this is correct if structure matches


const router = express.Router()
router.post('/sendEmail', senEmailController)

export default router;