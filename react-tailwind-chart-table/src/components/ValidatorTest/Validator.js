import validator from 'validator'

export default function Validator() {
  const date = formatDate('190102')
  const result = validator.isDate('01/01/01', { format: 'DD/MM/YY', strictMode: true })
  console.log(result, date.replace(/-/g, ''))

  return <div>Validator</div>
}

function formatDate(soure) {
  return soure.slice(0, 2) + '/' + soure.slice(2, 4) + '/' + soure.slice(4, 6)
}
