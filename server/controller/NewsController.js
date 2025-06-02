import express from 'express';

import { auth_key, base_name } from '../ServerData.js';

import Airtable from 'airtable-node';
import {
  reformaterBodyData,
  reFormaterResponseData,
} from '../ServerDataFunction.js';

const router = express.Router();

const airtable = new Airtable({ apiKey: auth_key })
  .base(base_name)
  .table('news');

router.get('/', (req, res) => {
  airtable
    .list({})
    .then((resp) => {
      try {
        const records = resp.records.map((record) => ({
          id: record.id,
          status: record.fields.status,
          zag: record.fields.zag,
          razdel: record.fields.razdel,
          avtor: record.fields.avtor,
          datasozd: record.fields.datasozd,
          datapubl: record.fields.datapubl,
        }));

        res.json(records);
      } catch (err) {
        console.error('Ошибка при обработке данных:', err);
        res.status(500).json({ error: 'Ошибка при обработке данных' });
      }
    })
    .catch((err) => {
      console.error('Ошибка при получении данных из Airtable:', err);
      res
        .status(500)
        .json({ error: 'Ошибка при получении данных из Airtable' });
    });
});

export default router;
