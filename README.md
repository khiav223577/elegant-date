# elegant-date

## Install

```bash
npm i elegant-date
```

## Usage

### Instantiate
```js
import elegantDate from 'elegant-date'

var now = elegantDate()
now.date
// => Fri Apr 13 2018 18:54:32

var now = elegantDate(new Date('2018/1/1')) 
now.date
// => Mon Jan 01 2018 00:00:00
```

### Add days
```js
now.yesterday.date
// => Fri Apr 12 2018 18:54:32

now.tomorrow.date
// => Fri Apr 14 2018 18:54:32

now.daysNext(3).date
// => Fri Apr 16 2018 18:54:32
```

### Add months
```js
now.monthsAgo(3).date
// => Fri Jan 13 2018 18:54:32

now.monthsNext(3).date
// => Fri Jul 13 2018 18:54:32
```

### Add years
```js
now.yearsAgo(3).date
// => Fri Apr 13 2015 18:54:32

now.yearsNext(3).date
// => Fri Apr 13 2021 18:54:32
```

### Go to the beginning or the end of month
```js
now.beginningOfMonth.date
// => Fri Apr 01 2018 00:00:00

now.endOfMonth.date
// => Fri Apr 30 2018 00:00:00
```

### Support chaining
```js
now.beginningOfMonth.tomorrow.date
// => Fri Apr 02 2018 00:00:00
```

### Formatting String
```js
now.strftime("%F %T")
// => 2018-04-13 18:54:32

now.strftime("%B %d, %Y %H:%M:%S")
// => April 13, 2018 18:54:32
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/khiav223577/elegant-date. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

