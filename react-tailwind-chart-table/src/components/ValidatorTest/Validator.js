import validator from 'validator'
import { prepareUserFromSolr } from '../User/User'
export default function Validator() {
  const date = formatDate('101088')
  const result = validator.isDate(date, { format: 'DD/MM/YY', strictMode: true })
  console.log(result, date.replace(/-/g, ''))

  console.log('isInt', validator.isInt('', { min: 0, max: 9 }))

  const user = prepareUserFromSolr()
  console.log(user)

  return <div>Validator</div>
}

function formatDate(soure) {
  return soure.slice(0, 2) + '/' + soure.slice(2, 4) + '/' + soure.slice(4, 6)
}
