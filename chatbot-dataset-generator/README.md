# 챗봇 데이터 생성

[faker.js](https://github.com/Marak/faker.js)를 이용해서 간단한 챗봇 로그를 제작하는 snippet 입니다.
아래 형태의 데이터를 생성합니다.

```javascript
{
  userId: faker.helpers.randomize(userIds), // 사용자 아이디
  text: faker.lorem.sentence(3), // 발화
  type: faker.helpers.randomize(["question", "button"]), // 입력 방법
  intent: faker.hacker.noun(), // 발화에 대한 의도
  entityName: faker.commerce.product(), // 발화에 포함된 엔티티명
  entityValue: faker.commerce.productName(), // 발화에 포함된 엔티티값
  confidence: parseFloat(Math.random().toFixed(2)), // 인텐트의 신뢰도
  createdAt: faker.date.between("2020-01-01", "2020-3-31") // 생성일시
}
```

## 설치

```bash
$ yarn install
```

## 데이터셋 개수 지정

```javascript
// index.js
generateCsvDataset(count: number); // count를 수정하시면 됩니다.
```

## 실행

```bash
$ yarn start
```

## 결과
루트 경로에 `dataset.csv` 파일이 생성됩니다.