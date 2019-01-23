// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();

// 云函数入口函数
exports.main = async(event, context) => {
  const {
    start,
    count,
    state
  } = event;
  const result = {
    start,
    count,
    state
  };
  const getMoviesData = await db.collection('movies')
    .where({
      state
    })
    .skip(start)
    .limit(count)
    .get()
  result.rows = getMoviesData.data;
  const totalData = await db.collection('movies').where({
    state
  }).count()
  result.total = totalData.data;
  return result
}