import Head from 'next/head'
import Layout from '../components/layout'
import perfect from '../lib/math'

export default function FirstPost() {
  var dict = { 1: 'wq', 2: 'aaaa', 3: 'bab', 4: 'cvc', 5: 'dvd' }
  var tables = perfect.create(dict)

  Object.keys(dict).forEach(function (key) {
    console.log('key: ' + key + ' value: ' + perfect.lookup(tables[0], tables[1], key))
  })

  console.log(perfect.lookup(tables[0], tables[1], '3'))
  return (
    <Head>
      <title>Test</title>
    </Head>
  )
}
