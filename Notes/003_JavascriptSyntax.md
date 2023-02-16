# Cú pháp JavaScript

Nói chung là React Native sử dụng JavaScript và anh chị em bà con họ hàng với JavaScript làm ngôn ngữ. Nên cho dù muốn hay không muốn. Thì việc bạn nắm được cú pháp lệnh trong JavaScript là một điều bắt buộc nhóe.

> Bắt đầu thôi!

## JavaScript là gì?

**Javascript** *(thường hay viết tắt là JS) *là ngôn ngữ lập trình kịch bản *(scripting language)* cho **client**-side, sau này còn cho cả **server-side** *(Nodejs)*.

**Javascript** được sử dụng chủ yếu để nâng cao sự tương tác của người dùng với trang web. Nói cách khác, bạn có thể làm cho trang web trở nên sinh động và tăng tính tương tác hơn. Trong các ứng dụng web, người ta hay dùng JS để làm các hiệu ứng đặc biệt như sliders, pop-ups, hoặc xác thực dữ liệu các form (form validations) trước khi gửi dữ liệu lên server .v.v...

## Cú pháp JavaScript

### Variable - Biến

#### Khai báo

Sử dụng từ khóa là `var` hoặc `let` để khai báo một biến. Ví dụ:

```js
let msg;
```

Khai báo biến mà không cần gán giá trị ban đầu cho nó. Còn cách khai báo với việc gán luôn giá trị lúc khởi tạo như sau.

```js
let msg = "Fx Studio";

alert(msg);
```

Khai báo xong, ta sử dụng như bình thường, thông qua tên biến.
Khai báo 1 lúc nhiều biến như sau:

```js
let user = "Fx", age = 25, message = "Xin chào";
```

Vẫn ổn thôi, nhưng tốt nhất là 1 dòng 1 khai báo. Tránh nhập nhèn với nhau.

```js
let user = "Fx"
let age = 25;
let message = "Xin chào";
```

Hoặc cũng với cách trên nhưng xuống dòng cho đẹp hơn xí.

```js

let user = "Fx",
    age = 25,
    message = "Xin chào";
```

Ngoài ra, bạn có thể thay `let` bằng `var` nhóe.

```js
var name = "Nick";
```

> `var` và `let` khác nhau sau thì phần sau sẽ rõ nhóe.

#### Variable Scope - Phạm vi biến

Trong *Javascript*, **scope** hay hiểu là phạm vi truy cập của một biến. Scope là phạm vi mà biến có thể truy cập được qua tên trực tiếp. Ở ngoài scope, biến đó sẽ không thể nhìn và truy cập được một cách trực tiếp nữa.

Một biến có 2 loại scope:

* **Local variable**: Các biến không thể truy cập được ở bất kỳ nơi nào khác trong dự án, ngoại trừ trong hàm mà biến đó được khai báo.
* **Global variable**: là các biến được khai báo bên ngoài hàm, có thể được truy xuất ở bất cứ đâu trong dự án. 

Xem ví dụ nhóe!

```js
var x = 10; //Đây là global variable bởi vì nó không khái báo trong hàm

var turnToZero = function (number) {
   var y = 5;//Đây là local variable bởi vì nó khái báo trong hàm
   number = 0;
   console.log("Giá trị của biến x là: " + x); 
   console.log("Giá trị của biến y là: " + y);
};

turnToZero(x);

console.log("Bên ngoài hàm, giá trị của biến x là: " + x);

```

Cũng tương tự bao ngôn ngữ lập trình khác về phạm vi biến mà thôi.

#### `let` & `var`

Chúng khác nhau ở phạm vi sử dụng.

* `var` sử dụng được hầu như tất cả mặt trận
* `let` dùng được tronh phạm vi khối lệnh

Xem ví dụ nhóe!

```js
// Var nè
function viduvar() {
	for (var i = 0; i <3; i++) {
	   console.log("i bên trong vòng lặp: ", i); // kết quả: 0, 1, 2 
	   }
	   console.log("i bên ngoài vòng lặp ", i); //Kết quả: 3 
}
viduvar();


// Let nè
function vidulet() {
	for (let j = 0; j <3; j++) {
		console.log("j bên trong vòng lặp: ", j); //Kết quả: 0, 1, 2
	}
	console.log("j bên ngoài vòng lặp: ", j);//ReferenceError: j is not defined 
}
vidulet();

```

Trong đó:

* `var` thì biến sẽ sử dụng tiếp được bên ngoài khối lệnh `for`
* `let` thì sẽ không được như vậy

Ngoài ra, các biến được khai báo bằng từ khóa `var` sẽ được khởi tạo thành `undefined`. Còn với `let` thì không. Đây là cơ chế **Hosting** trong **JavaScript**. Cái này bạn tìm hiểu sau nhóe.

### Kiểu dữ liệu

Như bao thế hệ dev truyền lại thì Kiểu dữ liệu trong JavaScript khá là đau não.

> Có một điểm đặc biệt ở **Javascript** mà bạn phải luôn nhớ: **biến không có kiểu, nhưng giá trị của biến thì có kiểu dữ liệu.**

Ví dụ cho vui nè!

```js
let foo = "bar";
// biến `foo` giờ đang có giá trị là một chuỗi ký tự (string)

foo = false;
// Giờ biến `foo` lại có giá trị là kiểu boolean

foo = 1337;
// Bây giờ thì biến`foo` có giá trị là kiểu number
```

* Đoạn mã trên hoàn toàn hợp lệ, vì trong Javascript, các biến không có kiểu.
* Các biến có thể chứa giá trị tùy ý.

Cứ hình dung các biến như là cái hộp được gán nhãn mà nội dung của nó có thể thay đổi theo thời gian (nó có thể chứa nước, hoặc bột gạo, sắt thép...).

> Tóm lại, chúng ta chỉ có khái niệm kiểu dữ liệu của giá trị, chứ không có kiểu dữ liệu của biến.

Về cơ bản, mỗi giá trị có một trong 7 kiểu dữ liệu sau:

* number
* string
* boolean
* object
* null
* undefined
* symbol (được thêm từ bản ECMAScript 2015 hay còn biết tới với tên quen thuộc ES6)

#### Numbers

**Javascript** chỉ chứa một kiểu số, gọi chung là **number** (không có phân chia thành *int, float, double* như JAVA). Kiểu **number** này có thể là *số nguyên, số thập phân, số âm, số dương...*

```js
var x1 = 56.00; // có dấu phẩy
var x2 = 56; // không có dấu phẩy
var y = 234e5; // 23400000
var z = 234e-5; // 0.00234
```

#### String

**String** là chuỗi các ký tự đặt trong dấu ngoặc kép hoặc ngoặc đơn.

```js
var carName = "Ford XS80"; // OK
var bikeName = 'SH XS80'; // OK

```

Ngoài ra, dấu ngoặc kép hay đơn có thể sử dụng kết hợp với nhau.

```js
var answer = "It's ok"; // một dấu ngoặc đơn trong ngoặc kép
var answer = "He is called 'Billy'"; // Cặp ngoặc đơn trong ngoặc kép 
var answer = 'He is called "Billy"'; // Cặp ngoặc kép trong ngoặc đơn
```

#### Boolean

Kiểu dữ liệu **boolean** rất đơn giản, chỉ có hai giá trị: `true` hoặc `false`.

```js
var x = true;
var y = false;
```

#### Object

**Object** là kiểu dữ liệu kết hợp các kiểu dữ liệu bên trên, được khai báo bằng dấu ngoặc `{}`, trong đó các thuộc tính được khai báo theo cặp <name: value>
Ví dụ:

```js
var person = {
  firstName:"Sơn",
  lastName:"Dương Anh",
  age:30,
  eyeColor:"black",
  hasChild: true
};
```

Để truy xuất vào giá trị của mỗi thuộc tính trong Object, bạn đơn giản chỉ cần gọi nó như sau:

```js
console.log(person.firstName); // Sơn 
console.log(person.age); // 30 
console.log(person.hasChild); // true
```

#### undefined & null

**Undefined** có nghĩa là không xác định, khi một biến được khai báo mà chưa gắn giá trị thì mặc định giá trị của nó là **Undefined**.

```js
var person;
console.log(person); // undefined
```

Bạn muốn *reset* một biến bất kỳ thì cứ thiết lập nó về `underfined` là được.

```js
var person = undefined; 
console.log(person); // undefined
```

**Null** là giá trị rỗng hoặc giá trị không tồn tại.

```js
var person = null;
console.log(person); // null
```

Sự khác nhau của chúng:

* `undefined` đại diện cho biến, một biến được khai báo nhưng không trỏ đến bất kì giá trị nào cả.
* `null` đại diện cho giá trị, ám chỉ một giá trị không tồn tại trong vùng nhớ.

Khi bạn thử sử dụng từ khóa typeof để kiểm tra sẽ thấy:

```js
console.log(typeof undefined) // undefined 
console.log(typeof null) // object
```

Nếu bạn so sánh hai giá trị này thì sao?

```js
console.log(null === undefined) // false 
console.log(null == undefined) // true
```

### Operators - Toán tử

#### Toán tử số học

Là những toán tử để thực hiện các phép tính toán giữa các số học.

| Toán tử | Giải thích |
|---|-----------------|| + | Phép tính cộng || - | Phép tính trừ || * | Phép nhân || / | Phép chia || % | Phép chia lấy phần dư || ++ | Tăng giá trị toán hạng lên 1 || -- | Giảm giá trị toán hạng đi 1 |

Ví dụ:

```js
var x = 5, y = 10, z = 15;
console.log(x + y); //returns 15
console.log(y - x); //returns 5
console.log(x * y); //returns 50
console.log(y / x); //returns 2
console.log(x % 2); //returns 1
console.log(x++); //returns 6
console.log(x--); //returns 4
```

Với `+` ta có thể cộng các giá trị với kiểu khác nhau để thành 1 chuỗi String.

```js
var a = 5, b = "Xin chào ", c = "đọc giả!", d = 10; 
console.log(a + b); // "5Xin chào "console.log(b + c); // "Xin chào đọc giả!"
console.log(a + d); // 15
```

#### Toán tử so sánh

**Javascript** có một số toán tử để so sánh hai toán hạng, trả về giá trị kiểu **boolean** (`true`/`false`)

| Toán tử | Giải thích |
|---|---|
| == | So sánh hai toán hạng (chỉ xét giá trị), bỏ qua kiểu dữ liệu |
| === | So sánh hai toán hạng xét cả kiểu dữ liệu. || != | So sánh khác nhau nhau. Nếu hai toán hạng khác nhau thì trả về true. || > | So sánh lớn hơn || < | So sánh nhỏ hơn || >= | So sánh lớn hơn hoặc bằng || <= | So sánh nhỏ hơn hoặc bằng |

Ví dụ:

```js
var a = 5, b = 10, c = "5";
var x = a;
console.log(a == c); // returns true 
console.log(a === c); // returns false 
console.log(a == x); // returns true 
console.log(a != b); // returns true 
console.log(a > b); // returns false 
console.log(a < b); // returns true 
console.log(a >= b); // returns false 
console.log(a <= b); // returns trueconsole.log(a >= c); // returns true 
console.log(a <= c); // returns true
```

#### Toán tử gán

Hiểu đơn giản là các toán tử ngoài việc để gán giá trị cho biến còn khuyến mãi thêm tiện ích.

| Toán tử | Giải thích |
|---|---|| = | Gán giá trị của toán hạng phải cho toán hạng trái. || += | Thực hiện tính tổng giá trị hai toán hạng trước, xong rồi mới gán giá trị tổng đó cho toán hạng trái. || -= | Thực hiện trừ (toán hạng trái - toán hạng phải), xong rồi mới gán giá trị hiệu đó cho toán hạng trái. || *= | Tương tự hai toán tử trên, thực hiện nhân trước rồi mới gán trị. || /= | Tương tự, thực hiện chia lấy phần nguyên trước rồi mới gán giá trị || %= | Tương tự, thực hiện chia lấy phần dư trước rồi mới gán giá trị. |

Ví dụ:

```js
var x = 5, y = 10, z = 15;
console.log(x = y); //x would be 10
console.log(x += 1); //x would be 6console.log(x -= 1); //x would be 4
console.log(x *= 5); //x would be 25
console.log(x /= 5); //x would be 1
console.log(x %= 2); //x would be 1
```

#### Toán tử điều kiện

Đây là toán tử thay cho lệnh `if else`. Chính là `? :`. Bạn có đoạn code sau:

```js

let a = 5;
let result;
if(a > 0) {
  result = "a lớn hơn 10";
} else {
  result = "a nhỏ hơn 10";
}
console.log(result);//a nhỏ hơn 10
```

Nó sẽ tương đương với đoạn code này:

```js
let a = 5;
let result = (a > 10) ? "a lớn hơn 10":"a nhỏ hơn 10"
console.log(result);//a nhỏ hơn 10
```

---

### Function

Cái này quá kinh điển rồi, khỏi giải thích lòng vòng nhóe. Đi vào trọng tâm luôn.

#### Khai báo

Sử dụng từ khóa `function` để khai báo một function trong JavaScript. Cú pháp:

```js
function functionName([param1], [param2],...){ 
	// body hàm
	statement1;
	statement2;
	... 
}
```

Còn một cách nữa, bạn có thể gán function cho 1 biến. Để biến 1 function như là một đối tượng, rồi bạn có thể truyền đi ...

```js
var functionName = function([param1], [param2],...){ 
	statement1;
	statement2;
	...};
```

Ví dụ nè!

```js
// Định nghĩa hàm
function sayHello () {
	console.log("Xin chào các bạn!")
}

var sayHi = function() {
	console.log("Xin chào các bạn độc giả VNTALKING")
}

const square = function (number) {
  return number * number;
}


// gọi hàm
sayHello();
sayHi();
console.log(square(5));

```

Tóm tắt:

* Một function có thể có 1 tham số, nhiều tham số hoặc không có tham số.
* Các tham số truyền vào function có thể là biến hoặc một function khác.
* Body của một function bắt buộc phải đặt trong dấu ngoặc nhọn `{ }`
* Function có thể có giá trị trả về hoặc không.

#### scope

Chính là phạm vi các biến/tham số được khai báo trong function. Tất cả chúng đều là **local variable**. Nên chỉ tồn tại và truy cập được trong hàm đó mà thôi.

#### Nested scope

Chúng ta xem ví dụ sau:

```jsfunction findMax(a, b, c, d) {
  	var max = function (m, n) {
		if (m > n) return m;
		return n; 
	};
		var t1 = max(a, b);
	var t2 = max(c, d);
	var t3 = max(t1, t2);
	console.log(t3);
}

findMax(3, 5, 4, 10); // => 10

var t = max(10, 11); // => Uncaught ReferenceError: max is not defined
```

Chúng ta khai báo một function bên trong một function thì được gọi là hàm lồng nhau **(nested function)**.

Nếu bạn sử dụng hàm nested, thì những hàm này cũng có phạm vi sử dụng cục bộ trong hàm chứa nó. Bạn không thể gọi những hàm này ở global.

#### Pure & non-pure function

Theo một góc độ nào đó thì có thể chia function ra làm hai loại:

* **Pure function**
	* là luôn trả về kết quả giống nhau khi giá trị tham số truyền vào giống nhau. 
	* Nó không bị phụ thuộc bởi bất cứ trạng thái, dữ liệu nào khác khi chương trình chạy mà chỉ phụ thuộc duy nhất vào tham số truyền vào.
* **Non-pure function**
	* là hàm phụ thuộc vào biến toàn cục hay môi trường thực thi. 
	* Do đó, khi bạn gọi cùng một hàm số với cùng một đối số, nhưng kết quả thu được lại khác nhau.

Ví dụ:

```js
// pure
function calculatePrice(productPrice) { 
	return productPrice * 0.1 + productPrice;
}

// non-pure
var tax = 10;
function calculateTax(productPrice) {
	return productPrice * (tax / 100) + productPrice;
}
```

Như ở ví dụ trên, giá trị trả về ngoài việc phụ thuộc vào giá trị tham số truyền vào, nó còn phụ thuộc vào biến toàn cục ở bên ngoài nữa (biến tax)

> Bạn sẽ cặp lại 2 đứa này ở các phần sau nhóe!

### Lệnh điều kiện

#### if else

Cũng tương tự bao ngôn ngữ lập trình khác. If else dùng để lựa chọn 1 trong 2 điều kiện Ta có 3 dạng:
* `if`
* `if else`
* `if else if else ...`

#### switch case

Lựa chọn nhiều điều kiện, thường lớn hơn 2. Cú pháp:

```js
switch(biểu thức){
    case 1:
        //code ở đây được thực thi
        break;
    case 2:
        //code ở đây được thực thi
        break;
    case n:
        //code ở đây được thực thi
        break;
    default:
//Các trường hợp còn lại nếu tất cả trường hợp trên không được //thực thi
}
```

* Câu lệnh switch hỗ trợ giá trị điều kiện có kiểu dữ liệu: `boolean`, `number`, `string`
* Sử dụng câu lệnh `break` để kết thúc câu lệnh **switch**

### Lệnh lặp

#### for

Vòng lặp **for** trong **Javascript** được biết đến như một vòng lặp với số lần lặp biết trước. 

Ý tưởng của vòng lặp `for` là chúng ta sẽ có:

* Một biến đếm ở dạng số nguyên (thường được khởi tạo là 0)
* Một điều kiện để vòng lặp kết thúc (thường là biến đếm < số lần lặp)
* Sau mỗi lần lặp, biến đếm sẽ thay đổi giá trị.

```js
for (var count = 1; count < 11; count++) { 
	document.write(count);
}
```

#### while

Vvòng lặp **while** là vòng lặp với số lần không biết trước. 

Ý tưởng của vòng lặp while cũng đơn giản hơn.

* Chúng ta chỉ cần chỉ cho vòng lặp while một điều kiện. 
* Nếu điều kiện còn đúng, thì nó còn thực hiện lặp, nếu sai thì vòng lặp sẽ dừng.

```js
var count = 1;
while (count < 6) {
	//JavaScript code xử lý khi vào lặp
	count++; 
}
```

#### do while

`do while` tương tự với `while` nhưng khác chỗ:

> Vòng lặp `do ... while` luôn lặp ít nhất một lần, nghĩa là nó sẽ chạy xong rồi mới kiểm tra điều kiện.

```js
var count = 1;
do {
  //JavaScript code xử lý khi vào lặp
  count++;
} while (count < 6);
```

#### break

* Câu lệnh **break** thường được đặt vào bên trong các vòng lặp như: `for`, `while`, `do while` hoặc trong câu lệnh `switch...case`
* Nếu câu lệnh **break** không có **label**, nó sẽ kết thúc khối lệnh vòng lặp hoặc câu lệnh **switch** và chuyển sang khối lệnh tiếp theo.
* Nếu câu lệnh **break** có **label**, nó sẽ kết thúc câu lệnh có **label** đó.

Nói cách khác là *"lệnh break được dùng để thoát khỏi vòng lặp trước khi vòng
lặp kết thúc"*.

#### continue

* Câu lệnh **continue** thường được đặt vào bên trong các vòng lặp như: `for`, `while`, `do...while`
* Khi lệnh **continue** được thực thi, những câu lệnh bên dưới của lần lặp hiện tại sẽ bị bỏ qua.

---

## Data structures - Dữ liệu có cấu trúc

Giống với các ngôn ngữ lập trình bậc cao khác, **Javascript** cũng hỗ trợ các loại dữ liệu có cấu trúc, là những dữ liệu kết hợp các kiểu dữ liệu khác.

Trong phần này, chúng ta sẽ cùng tìm hiểu hai loại dữ liệu có cấu trúc phổ biến nhất:

* Object
* Array

Có một quan điểm cho rằng: *chỉ cần bạn hiểu rõ và làm việc thành thục với Object là bạn đã làm chủ được Javascript*.

### Object

#### Khai báo

Kiểu dữ liệu **Object** trong *Javascript* là một tập hợp các kiểu dữ liệu liên quan không theo thứ tự dưới dạng cặp `key: value`. **Key** ở đây có thể là biến hoặc hàm và được gọi là thuộc tính hoặc method, tùy ngữ cảnh của *Object* đó.

* Định nghĩa trong 2 dấu `{}`
* Kiểu của `key` phải là `string` hoặc `number`. Dễ gọi thì gọi là thuộc tính *(property)*
* Nếu kiểu giá trị của `value` là `function`, thì sẽ gọi là phương thức *(method)*

Ví dụ:

```js
let website = {
    name : "Fx Studio",
    location : "Đà Nẵng",
    established : "2023",
    displayInfo : function(){
    	console.log(`${website.name} was established in ${website.established} at ${website.location}`);	 } 
}

website.displayInfo();
```

#### Thuộc tính

Trong Object, có hai kiểu thuộc tính:

* **Thuộc tính riêng** *(own property)* là thuộc tính được định nghĩa tại bản thân của đối tượng (object).
* **Thuộc tính kế thừa** *(inherited property)* là những thuộc tính được kế thừa từ đối tượng *prototype* của object đó. Đối tượng *prototype* là đối tượng đặc biệt, được thêm vào tự động khi một đối tượng được tạo.

Để xác định một thuộc tính có phải là thuộc tính riêng hay không, chúng ta có thể sử dụng hàm `hasOwnProperty()`

```js// hasOwnProperty code in js
const object = new Object();
object.property1 = 42;
console.log("property1 là own property: " + object.hasOwnProperty("property1"));
```
Để kiểm tra một thuộc tính có thuộc object hay không (kể cả thuộc tính riêng và thuộc tính kế thừa), ta dùng toán tử in:

```js
var person = {name: 'Duong Anh Son'};
//kiểm tra thuộc tínhconsole.log('name' in person); //kết quả in ra là: true 
console.log('age' in person); //kết quả in ra là: false
```

#### Cách tạo

Nhìn chung, chúng ta có 4 cách để khởi tạo một Object:

* Dùng Object literals
* Dùng Object constructor
* Sử dụng Object Contructor functions
* Sử dụng prototype pattern.

##### Dùng Object literals

Trong OOP, **Object literals** được biểu diễn bằng **dấu phẩy** ngăn cách giữa các cặp `name-value` nằm trong ngoặc nhọn `{ }`

Về cơ bản, cú pháp như sau:

```js
var obj = {
    member1 : value1,
    member2 : value2,
};
```

Trong đó, `member` có thể là bất cứ thứ gì, như *strings, numbers, functions, arrays...* thậm chí là một object khác.

##### Sử dụng Object Contructor

Một cách khác để tạo đối tượng, đó là sử dụng hàm khởi tạo *(constructor )*. 

* Hàm khởi tạo này là một hàm để tạo ra các object mới
* Đi kèm với từ khoá `new`. 
* Có thể khởi tạo luôn những giá trị mặc định của đối tượng được tạo.

```js
const website = new Object();
website.name = 'fxstudio.dev';website.location = 'Đà Nẵng';
website.established = 2019;

website.displayInfo = function(){
console.log(`${website.name} được thành lập từ ${website.established} tại
 ${website.location}`);
}

website.displayInfo();
```

##### Sử dụng Object Contructor functions

Hơi dùng OOP, bạn sẽ viết 1 function và tạo các đối tượng từ đó. Xem ví dụ thôi.

```js
function Vehicle (name, maker) {
   this.name = name;
   this.maker = maker;
}

let car1 = new Vehicle('Fiesta', 'Ford');
let car2 = new Vehicle('Santa Fe', 'Hyundai')

console.log(car1.name); // In ra màn hình console: Fiesta console.log(car2.name); // In ra màn hình console: Santa Fe
```

Với ES6, thay từ khóa `function` bằng `class` cho nó xin hơn chút.

```js
class people {
  constructor() {
    this.name = 'Fx';
  }
}

let person = new people();

// In ra màn hình console là: : Dương Anh Sơn
console.log(person.name);
```

##### Sử dụng prototype

Với một function rỗng (không có gì trong đó) được xem là một Prototype. Ví dụ:

```js
function Person(name){
}
```

Bước tiếp theo, bạn thêm các thuộc tính & phương thức cho Prototype đó.

```js
Person.prototype.name = "Fx" ;
Person.prototype.age = 28;
Person.prototype.address = "Đà Nẵng"; 
Person.prototype.displayName = function(){
  console.log(this.name);
}
```

Cuối cùng, bạn tạo đối tượng như bình thường thôi. Và sử dụng nó như bình thường.

```js
var person = new Person();

person.displayName()
```
#### Truy xuất

Có được Object rồi, nhiệm vụ tiếp theo là đọc ghi thuộc tính hay gọi các phương thức của nó mà thôi.

* Sử dụng dấu `.`. Cách này đơn giản như bao ngôn ngữ khác
* Sử dụng dấu `[]`. Đưa tên thuộc tính/phương thức vào trong dấu vuông đấy. Vì bản chất chúng là các cặp `key:value`, nên ta sẽ sử dụng `key` để truy xuất.

Ví dụ nhóe

```js
let website = {
    domain : "fxstudio.dev",
    location : "Đà Nẵng",
    established : 2019,
    displayinfo : function() {
		console.log("Nói về chuyện đời của các dev."); 
	}
}
console.log(website["domain"]);
console.log(website["location"]);
```

Lưu ý: với cách viết này, bạn không thể truy xuất tới method của Object được.

* Sử dụng `for in` để truy cập vào các `key` của Object

Ví dụ nè!

```js
let rates= {
    "CAD": 1.5453,
    "HKD": 9.3911,
    "ISK": 157,
    "PHP": 58.27,
    "DKK": 7.4377,
    "HUF": 360.9,
    "CZK": 26.025,
    "AUD": 1.5744,	"RON": 4.8753,
    "SEK": 10.1139,
    "IDR": 17123.2,
    "INR": 88.438
}

for (let key in rates) {
    console.log(key + ": " + rates[key]);
}
``` 

* Sử dụng `delete` để xóa đi một thuộc tính của Object

Ví dụ nè!

```js
let user = { 
	name:"Fx"
}

//Output: Fx
console.log(persion.name);

// delete banedelete persion.name

//Output : undefined
console.log(persion.name);
```


### Array

Kiểu dữ liệu có cấu trúc tiếp theo tìm hiểu là Array. Cũng khá quen thuộc với anh em lập trình viên rồi. Ta đi vào khai báo luôn nhóe

#### Khai báo

Về cơ bản ta có 2 cách khai báo:

* Array literals với dấu `[]`
* Array Constructor với toán tử `new`

Ví dụ:

```js
//Sử dụng cách 1:
// Khởi tạo giá trị trong khi khai báo
var house = ["1BHK", "2BHK", "3BHK", "4BHK"];

//==============================================

//Sử dụng cách 2:
// Khởi tạo giá trị trong khi khai báo
// Tạo một mảng có 5 phần tử: 10, 20, 30, 40, 50
var house = new Array(10, 20, 30, 40, 50);
//Khởi tạo một mảng có 5 phần tử là undefined
var house1 = new Array(5);

//Khởi tạo một mảng có 1 phần tử là !BHK
var home = new Array("!BHK");
```

Tóm lại, ta nên tránh việc sử dụng Constructor với việc truyền 1 tham số là `number` cho nó. Vì các phần tử còn sẽ là `undefined`. Còn lại thì ổn hết.

#### Truy cập

Cũng sử dụng `[]` và truyền `index` của phần tử con nào mà bạn muốn sử dụng. 

```js
var house = ["1BHK", "2BHK", "3BHK", "4BHK"];

// truy cập
console.log(house[0]);//kết quả: 1BHK 

//cập nhật
house[0] = "ABC"; 
console.log(house[0]);//kết quả: ABC
```

Với `index` lớn hơn số lượng phần tử trong Array thì sẽ thành `undefined` nhóe.

```js
var house = ["1BHK", "2BHK", "3BHK", "4BHK"]; 
console.log(house[10]);//kết quả: undefined
```

#### Thao tác

##### Thêm

Phương thức `push()` được dùng để thêm một hoặc nhiều phần tử mới vào vị trí cuối mảng. Cú pháp:

```js<array>.push(item1, item2 ...);
```

Phương thức `unshift()` dùng để thêm một hoặc nhiều phần tử vào đầu mãng. Cú pháp:

```js
<array>.unshift(item1, item2 ...);
```

##### Xóa

Để xóa một phần tử ở cuối mảng, chúng ta sử dụng hàm `pop()`. Kết quả của hàm này là giá trị của phần tử vừa xóa xong. Cú pháp:

```js
<array>.pop();
```

Để xóa phần tử đầu tiên thì sử dụng phương thức `shift()`. Cú pháp:

```js
<array>.shift();
```

##### splice()

Xóa ở vị trí bất kỳ, sử dụng hàm `splice()`. Cú pháp:

```js
<array>.splice(start, length);`
```

Với:
* `start`: vị trí bắt đầu xóa
* `length` : số lượng phần tử cần xóa

Ví dụ:

```js
let mobiles = ["HTC", "Nokia", "Apple", "LG", "Honda", "SYM", "Suzuki"]; mobiles.splice(1,4);
console.log(mobiles);
//==> Kết quả: ["HTC", "SYM", "Suzuki"];
```

Vừa xóa vừa thêm hoặc thêm phần tử ở vị trí bất kì. Cũng hơi ảo ma lazada nữa. Cú pháp như sau:

```js
array.splice(start, số_phần_tử_sẽ_xóa_khi_thêm, phần_tử_mới_1, phần_tử_mới_2, ....);
```

Khi giá trị của `số_phần_tử_sẽ_xóa_khi_thêm` bằng:

* `0` thì sẽ thêm các phần tử mới tại vị trí `start`
* `Khác 0` thì sẽ xóa đi vài phần tử tại vị trí bắt đầu, rồi sau đó thêm các phần tử mới vào

##### Ghép mãng

Sử dụng phương thức `concat()` để ghép nhiều mãng thành 1 mãng mới. Cú pháp:

```js
var tên_mảng_mới = array1.concat(array2, array3, ...., arrayN);
```

##### Trích xuất 1 phần của mãng

Nếu muốn tạo một mảng bằng cách trích xuất một phần từ một mảng đã có, bạn có thể sử dụng hàm `slide()`. Cú pháp:

```js
var new_array = array.slice(start, end);
```

Lưu ý:

* Nếu không có truyền `end` thì sẽ lấy từ `start` tới hết mãng.
* Nếu truyền giá trị âm cho `start` & `end` thì sẽ xác định ngược lại.

##### Sắp xếp

Cái này đơn giản quá. Sử dụng làm `sort()` và cú pháp như sau:

```js
array.sort(hàm_so_sánh);
```

Ví dụ:

```js
const myArray = [5, 4, 3, 2, 1]


// Sắp xếp từ Nhỏ nhất đến Lớn nhất
myArray.sort(function(a, b) {
  return (a-b);
})
console.log(myArray);
//-------> Kết quả : [1, 2, 3, 4, 5]


// Sắp xếp từ Lớn nhất đến Nhỏ nhất
myArray.sort(function(a, b) {
  return (b-a);})
console.log(myArray);
//-------> Kết quả : [5, 4, 3, 2, 1]
```

##### Tìm kiếm

Cú pháp:

```js
array.find(hàm_kiểm_tra);
```

Ví dụ:

```js
const persons = [
  { id: 1, name: "Trang" },
  { id: 2, name: "Doanh" },
  { id: 3, name: "Sơn" },
]

let person = persons.find(function(person) { return person.id === 3;
});
console.log(person);
//-------> Kết quả : {id: 3, name: "Sơn"}

let p = persons.find(function(person){ return person.id === 7;
});
console.log(p);//-------> Kết quả : undefined
```

Nếu không tìm được giá trị nào thoải mãn điều kiện thì sẽ nhận được `undefined`.

##### map()

Hàm `map()`: Thường được dùng để biến đổi các phần tử trong một mảng thành một kiểu khác. Ví dụ:

```js
const myArray = [5, 4, 3, 2, 1]

// Tạo mảng mới mà mỗi phần tử có giá trị gấp 10 lần phần tử trong mảng cũconst newArray = myArray.map(function(x){
  return x * 10;
})

console.log(newArray);
//==>Kết quả:  [50 ,40 ,30 ,20 ,10]
``` 

##### filter()

Hàm `filter()`: Đúng như tên gọi, hàm này có chức năng là lọc những phần tử thỏa mãn điều kiện. Ví dụ:

```js
//Lọc những độ tuổi được phép xem phim 18+
const ages = [5, 12, 13, 24, 33, 16, 40];
let canWatch = ages.filter(function(age){
  return age >= 18;
});

console.log(canWatch);
//==>Kết quả: [24 ,33 ,40]
```

##### every()

Hàm `every()`: Hàm này có chức năng giúp bạn kiểm tra xem trong mảng mà tất cả các phần tử có thỏa mãn điều kiện nào đó hay không. 

* Kết quả trả về là `true` hoặc `false`. 
* Chỉ cần một phần tử trong mảng không thỏa mãn điều kiện sẽ trả về kết quả `false`.

```js
//Kiểm tra xem mảng này có phải có tất cả phần tử là số chẵn hay không? const arr = [56, 92, 18, 88, 12];

var result = arr.every(function(element) {
  return (element % 2 === 0);
});
console.log(result);
//==>Kết quả: true
```

##### some()

Hàm `some()` ngược lại với `every()`. Chỉ cần 1 phần tử thoải mãn điều kiện thì trả về là `true`. Ví dụ:

```js
//Kiểm tra xem mảng này có phải chứa ít nhất một số chẵn hay không? const arr = [55, 92, 18, 88, 12];

var result = arr.some(function(element) {
  return element % 2 === 0;
});

console.log(result);
//==>Kết quả: true
```

> Tới đây thì quá dài rồi, tạm thời xem như là xong cú pháp cơ bản của JavaScript nhóe.

---

*(Chúc bạn một ngày tốt lành và cảm ơn bạn đã ghé thăm repo này.)*