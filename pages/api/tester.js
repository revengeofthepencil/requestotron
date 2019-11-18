import nextConnect from 'next-connect';
import bcrypt from 'bcryptjs';
import middleware from '../../middlewares/withMiddleware';
const handler = nextConnect();

//handler.use(middleware);


handler.post((req, res) => {
    const data = req.body ? req.body : {};
    data.timestamp = new Date();

    console.log("get it!! body = " + JSON.stringify(req.body));

    return res.send({
        status: 'ok',
        data: data,
        message: 'you made it!',
    });

});

export default handler;
