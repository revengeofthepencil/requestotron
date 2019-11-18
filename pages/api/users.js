import nextConnect from 'next-connect';
import bcrypt from 'bcryptjs';
import middleware from '../../middlewares/withMiddleware';
const handler = nextConnect();

//handler.use(middleware);


handler.get((req, res) => {
    res.status(201).send({
        status: 'ok',
        message: 'woo hoo! you made it!',
    });
});

handler.post((req, res) => {
    const { email, name, password } = req.body;

    console.log("get it!! body = " + JSON.stringify(req.body));

    return res.send({
        status: 'ok',
        data: {
            isLoggedIn: true
        },
        message: 'you made it!',
    });

});
/*
handler.post((req, res) => {
    const { email, name, password } = req.body;

    console.log("get it!! body = " + JSON.stringify(req.body));

    if (1 > 0 ) {
        res.status(201).send({
            status: 'ok',
            message: 'test passed',
        });

        return
    }


    return req.db
        .collection('users')
        .countDocuments({ email })
        .then((count) => {
            if (count) {
                return Promise.reject(Error('The email has already been used.'));
            }
            return bcrypt.hashSync(password);
        })
        .then(hashedPassword => req.db.collection('users').insertOne({
            email,
            password: hashedPassword,
            name,
        }))
        .then((user) => {
            req.session.userId = user.insertedId;
            res.status(201).send({
                status: 'ok',
                message: 'User signed up successfully',
            });
        })
        .catch(error => res.send({
            status: 'error',
            message: error.toString(),
        }));
});
*/
export default handler;
