// @ts-ignore
export default async ({ response }, next) => {
  try {
    console.log("bonjour");
    await next();
  } catch (err) {
    response.status = 500;
    response.body = { msg: err.message };
  }
};
