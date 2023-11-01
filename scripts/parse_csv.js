const StreamZip = require('node-stream-zip')
const Papa = require('papaparse')
const path = require('path')
const fs = require('fs')

function parseCsv(csvData) {
  Papa.parse(csvData, {
    header: true,
    complete: (results) => {
      console.log('Headers: ', results.meta.fields.join(', '))
      console.log('Total Rows: ', results.data.length)

      const maleNames = new Set()
      const femaleNames = new Set()

      results.data.forEach((row) => {
        if (row.Gender === 'male') {
          maleNames.add(row.GivenName)
          return
        }
        if (row.Gender === 'female') {
          femaleNames.add(row.GivenName)
        }
      })

      const sortedMaleNames = Array.from(maleNames).sort()
      console.log('Unique Male Names: ', sortedMaleNames.length)

      const outputPathMale = path.join(__dirname, 'output', 'us_male_names.json')
      fs.writeFileSync(outputPathMale, JSON.stringify(sortedMaleNames, null, 0))
      console.log(`Unique male names saved to ${outputPathMale}`)

      const sortedFemaleNames = Array.from(femaleNames).sort()
      console.log('Unique Female Names: ', sortedFemaleNames.length)

      const outputPathFemale = path.join(__dirname, 'output', 'us_female_names.json')
      fs.writeFileSync(outputPathFemale, JSON.stringify(sortedFemaleNames, null, 0))
      console.log(`Unique female names saved to ${outputPathFemale}`)
    }
  })
}

async function extractAndParseCsv() {
  const zipFilePath = path.join(__dirname, 'data', 'FakeNameGenerator.com_1.zip')
  // eslint-disable-next-line new-cap
  const zip = new StreamZip.async({ file: zipFilePath })

  const entriesCount = await zip.entriesCount
  console.log(`Entries read: ${entriesCount}`)

  try {
    const csvData = await zip.entryData('FakeNameGenerator.com_1.csv')
    parseCsv(csvData.toString('utf8'))
  } catch (err) {
    console.error('Error extracting the CSV file:', err)
  } finally {
    await zip.close()
  }
}

extractAndParseCsv().then(() => console.log('Done'))
