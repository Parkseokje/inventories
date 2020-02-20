const faker = require("faker/locale/ko");
const { parse } = require("json2csv");
const fs = require("fs");

/**
 * botName
 * userId
 * intent
 * text
 * type
 * entityName
 * entityValue
 * confidence
 * createdAt
 */
function generateCsvDataset(count) {
  let dataset = [];
  const userIds = [
    "3f4ec13b-e434-4ed5-b2bd-b93c97ec3dba",
    "75a223c2-5150-4d42-b08b-da4e52a84350",
    "04a2f12a-dacd-4021-b3fa-c64584a4c05f",
    "64e4f499-d46a-4e85-afe7-f025b0226300",
    "9e4e1751-bbbd-414f-924e-0979cb580a36"
  ];

  for (let i = 0; i < count; i++) {
    dataset.push({
      userId: faker.helpers.randomize(userIds),
      // userId: faker.random.uuid(),
      text: faker.lorem.sentence(3),
      type: faker.helpers.randomize(["question", "button"]),
      intent: faker.hacker.noun(),
      entityName: faker.commerce.product(),
      entityValue: faker.commerce.productName(),
      confidence: parseFloat(Math.random().toFixed(2)),
      // confidence: faker.random.float({ min: 0, max: 1, precision: 0.01 }),
      createdAt: faker.date.between("2020-01-01", "2020-3-31")
    });
  }

  try {
    const csv = parse(dataset, Object.keys(dataset[0]));

    fs.writeFile(__dirname + "/dataset.csv", csv, function() {
      console.log("Datset generated successfully!");
    });
  } catch (err) {
    console.error(err);
  }
}

generateCsvDataset(100);
