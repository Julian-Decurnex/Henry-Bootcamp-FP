const router = require('express').Router();

const CLIENT_URL = 'https://localhost:3000'

router.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: 'successfull login',
            user: req.user,
            cookies: req.cookies
        })
    }
});

router.get('/login/failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: 'login failed'
    })
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
})

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback', passport.authenticate('google', {
    succesRedirect: CLIENT_URL,
    failureRedirect: '/login/failed'
}));

module.exports = router