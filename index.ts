import express, { Express, NextFunction, Request, Response, Router } from "express";
import dotenv from "dotenv";
import { CodeYouRepository } from "./repositories/codeYouRepository"; 

dotenv.config();

const app: Express = express();
const codeYouRepository: CodeYouRepository = new CodeYouRepository();
const port = process.env.PORT;

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server!!!!");
});

router.get("/demo", (req: Request, res: Response) => {
    const data = codeYouRepository.returnCodeYouData();

    res.status(200).json({
        "status": 200,
        "statusText": "OK",
        "message": "Success",
        "data": data
    });
});

router.post("/demo", (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body);
        res.send("Success");
    } catch (error) {
        res.status(404).send("U suk");
    }
});

app.use('/api/', router);

app.listen(port, () => {
    console.log(`[server]:⚡️Server is running at http://localhost:${port}`);
});
