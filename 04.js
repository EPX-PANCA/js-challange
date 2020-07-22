const leapYear = (start, end) => {
  for (let index = start; index <= end; index++) {
    if (((index % 4 == 0) && (index % 100 != 0)) || (index % 400 == 0)) {
      console.log(`${index}: Tahun kabisat`)
    } else {
      console.log(`${index}: Bukan tahun kabisat`)
    }
  }
}

leapYear(1000, 2020)