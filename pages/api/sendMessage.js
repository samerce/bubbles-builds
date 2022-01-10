
export default function handler(req, res) {
  fetch(process.env.SLACK_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
    },
    body: req.body,
  }).then(() => {
    res.status(200).send()
  })

}