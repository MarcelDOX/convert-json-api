import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser'
import JsonRoutes from './routes/JsonRoutes';
import bodyParserErrorHandler from 'express-body-parser-error-handler';
const app = express();
const port = 3000;

app.use(bodyParser.json())

app.use(JsonRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: 'Rota não encontrada' });
});

app.use(bodyParserErrorHandler());

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});