import nextConnect from 'next-connect';
const handler = nextConnect();


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
