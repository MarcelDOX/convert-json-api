import { Router, Request, Response } from 'express';
import { JsonContent } from "../entities/JsonContent";
import { JsonService } from "../services/JsonService";

const router = Router();

router.post('/', (req: Request, res: Response) => {
    const jsonContent = req.body as JsonContent;
    
    const jsonService = new JsonService();
    const result = jsonService.removeValues(jsonContent);

    res.json(result);
})

export default router;