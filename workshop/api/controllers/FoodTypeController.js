const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    create: async (req, res) => {
        try {
            await prisma.foodType.create({
                data: {
                    name: req.body.name,
                    remark: req.body.remark ?? "",
                    status: "use",
                }
            })

            return res.status({ message: "success" });
        } catch (e) {
            return res.status(500).send({ error: e.message });
        }
    },
    list: async (req, res) => {
        try {
            const rows = await prisma.foodType.findMany({
                where: {
                    status: "use",
                },
            });

            return res.send({ results: rows });
        } catch (e) {
            return res.status(500).send({ error: e.message });
        }
    }
}