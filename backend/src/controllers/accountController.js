const Account = require('../models/Account');

exports.getAccountDetails = async (req, res) => {
    try {
        const account = await Account.findByPk(req.user.id);
        if (!account) {
            return res.status(404).json({ error: 'Account not found' });
        }
        res.status(200).json(account);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve account details' });
    }
};

exports.updateAccount = async (req, res) => {
    try {
        const { name, email } = req.body;
        const updatedAccount = await Account.update(
            { name, email },
            { where: { id: req.user.id }, returning: true }
        );
        if (updatedAccount[0] === 0) {
            return res.status(404).json({ error: 'Account not found' });
        }
        res.status(200).json(updatedAccount[1][0]);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update account' });
    }
};
