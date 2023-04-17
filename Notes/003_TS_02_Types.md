# TypeScript - Types

Chúng ta sẽ tìm hiểu tiếp và **Kiểu dữ liệu** *(Types)* trong **TypeScript** như thế nào. Có sự cải tiến nào hơn *JavaScript* hay không nhá.

> Đây là cội nguồn của sự đau khổ.

## Tư tưởng chính

Nếu bạn đã làm *Javascript* rồi bạn sẽ thấy sự thoải mái quá mưc trong ngôn ngữ này. Nó không có kiểu dữ liệu cho *biến/hằng*, nhưng lại có kiểu dữ liệu cho *giá trị*. Nghe qua thì cũng là nỗ não rồi hỉ. Sự thoải mái này cũng đem tới nhiều phiền phức.

Bản chất mọi **giá trị** đều sẽ có các *thuộc tính & hành vi* tương ứng. Khi *JS* không có sự phân định rạch ròi, thì mọi thứ cũng sẽ nhập nhèn theo. Ví dụ:

```js
const str = "Hello World!";
str.toLowerCase();
str();
```

Đó là một **String**, nhưng bạn vẫn có thể gọi nó thực thi được. Tất nhiên, bạn sẽ gặp lỗi lúc thực thi còn về biên dịch thì không gặp lỗi nào. Còn với `toLowerCase()` thì đó là một thuộc tính của **String** nên sẽ thực thi tốt.

Còn với một ví dụ tiếp theo là **function**, ta sẽ không có khai báo các kiểu dữ liệu cho tham số. Bạn xem ví dụ sau nhóe.

```js
function ham(x) {
    return x.toLowerCase();
}

console.log(ham("ABC"));
console.log(ham(123));
```

Tham số `x` cho phép chấp nhận mọi kiểu dữ liệu. Nhưng kết quả sẽ dựa vào các thuộc tính & phương thức của giá trị mà bạn truyền cho tham số hàm.

> Nếu ổn là sẽ chạy được. Còn nếu sai thì sẽ báo lỗi. 

Quan trọng là lúc code bạn sẽ không biết được, hoặc bạn gọi lại các function của người khác viết thì khá là mơ hồ.

Vâng vâng và mây mây, **Typescript** sinh ra với tư tưởng thêm các kiểu dữ liệu & hướng đối tượng cho *Javascript*. Giúp đó trở nên an toàn hơn trong con mắt lập trình viên. Ở trên, mình chỉ đưa ra vài điểm để dẫn chứng mà thôi. Còn lại thì bạn tự tìm hiểu thêm nha!

> *TypeScript* còn hỗ trợ cho dev về các *tools* mà nó cung cấp, cũng như mô tả *documents* cụ thể hơn.

## Type Annotations

Bắt đầu bạn sẽ có những kiểu dữ liệu được gọi là nguyên thủy trong Javascript như:

* **string**
* **numner**
* **boolean**

Và với **TS** thì bạn cũng sẽ dùng những kiểu dữ liệu cơ bản như **JS** đó. Nhưng kèm với việc khai báo cụ thể kiểu dữ liệu cho biến.

```ts
var username: string;
```

Có các kiểu dữ liệu nguyên thủy **string, number, boolean** cũng có thể chỉ định biến đó nhận kiểu dữ liệu bất kỳ với **any**. Việc cho khai báo như vậy giúp phát hiện lỗi ngay từ khi code. Ví dụ, khai báo biến là **string** lại gán **number** sẽ có thông báo lỗi khi dịch.

Trong những trường hợp quá rõ ràng, **TS** có thể tự suy luận *(infer)* kiểu dữ liệu của biến nên bạn có thể không cần mô tả kiểu dữ liệu. Làm như vậy phần nào giúp chương trình dễ đọc hơn.

```js
var temp = 10 //number
```

Với ví dụ trên thì biến `temp` sẽ có kiểu dữ liệu là `number`. Cũng đơn giản à.

## Array

Với kiểu dữ liệu là mảng, ta cũng phải cung cấp kiểu dữ liệu cụ thể cho biến. Hoặc biến sẽ nhận kiểu dữ liệu của giá trị gán cho nó lúc khai báo ban đầu. Ta xem qua vài ví dụ đơn giản sau:

```ts
var array1 = [1,2,3];
console.log(array1);

var array2 : number[];
array2 = [4,5,6];
console.log(array2);

var array3: Array<string> = ['a', 'b', 'c'];
console.log(array3);
```

Bạn sẽ thấy có 3 cách khái báo một mảng trong TS:

* Gán trực tiếp bằng việc gán 1 mảng giá trị cho một biến
* Khai báo với dấu `[]` phía sau kiểu dữ liệu
* Sử dụng Generic `Array<T>`, kiểu dữ liệu sẽ được truyền cho `T`

Khi đã xác định kiểu dữ liệu đúng, thì các thao tác tương tác với biến cũng phải tuân theo kiểu đó quy định. Ví dụ:

```ts
const array4: string[] = ['foo', 'bar']
array4.push(123)
```

Ta sẽ nhận được lỗi, vì bạn đang ném một phần tử kiểu là `munber`, cho một mảng kiểu `string`.

## Enum

Kiểu **enum** *(viết tắt của enumeration: kiểu liệt kê)* cho phép bạn khai báo một tập hợp các biến không đổi *(constant)*. Ví dụ:

```ts
enum ABCD {
    A,
    B,
    C,
    D,
}

console.log(ABCD.B);

const a = ABCD.A;
```

Enum có có thể nhận các giá trị cho các case của nó. Ví dụ:

```ts
enum Direction {
  Up = 1,
  Down,
  Left = 6,
  Right,
}

console.log(Direction.Up) // 1
console.log(Direction.Down) // 2
console.log(Direction.Left) // 6
console.log(Direction.Right) // 7
```

hoặc

```ts
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
```

## Object

Kế thừa lại của *Javascript*. Cũng tượng như với *JS*, nhưng bạn sẽ cần phải khai báo cụ thể kiểu dữ liệu cho các `key` mà thôi. Ta sử dụng **Object Type** làm tham số cho hàm nhóe. Còn chi tiết cụ thể nó thì chúng ta sẽ đi vào phần dưới nữa.

```ts
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });
```

Nếu **object** có một thuộc tính không bắt buộc, bạn có thể thêm `?` vào sau tên thuộc tính đó.

```ts
function printUser(user: { id: number; username: string; role?: string }) {
  // Khi bạn truy xuất một thuộc tính không tồn tại, JavaScript sẽ trả về undefined.
  if (role !== undefined) {
    console.log(`Hello ${user.username} of role ${user.role}`)
  } else {
    console.log(`Hello ${user.username}`)
  }
}
```

## null & undefined

Cũng như JavaScript, TS có 2 kiểu dữ liệu `null` và `undefined`. Tuy nhiên tùy thuộc vào bạn tùy chỉnh **strictNullChecks** trong `tsconfig.json` thế nào mà chúng sẽ hành xử khác nhau.

* `strictNullChecks`: **true**: Trình biên dịch TS sẽ báo lỗi nếu bạn không kiểm tra biến có phải **null** hay **undefined** không.
* `strictNullChecks`: **false**: Gặp nhau làm ngơ

Ví dụ code

```ts
// strictNullChecks: true
function doSomething(x: string | null) {
  // Error: Object is possibly 'null'.
  console.log('Hello, ' + x.toUpperCase())
}

// Sửa lại
function doSomethingSafer(x: string | null) {
  if (x === null) {
    // Do nothing
  } else {
    console.log('Hello, ' + x.toUpperCase())
  }
}
```

### any

Đây là kiểu dữ liệu đặc biệt trong **TS**. Với `any` thì TS sẽ quan tâm gì nhiều. Bạn thích làm gì thì làm. Và gái giá phải trả là không kiểm soát hết lỗi. Do đó, khuyến khích bạn không nên dùng nó.

Ví dụ code

```ts
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```


## Union

Đây là kiểu dữ liệu kết hợp *(Union Type)*. **TS** cho phép bạn kết hợp hai hay nhiều kiểu dữ liệu lại với. Các kiểu dữ liệu trong Union sẽ được gọi là một kiểu dữ liệu thành viên *(member)*.

Ví dụ như sau:

```ts
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(101); // OK
printId("202"); // OK
printId({ myID: 22342 }); // Error
```

Mỗi thời điểm thì biến kiểu Union sẽ nhận đúng giá trị phù hợp với 1 trong các kiểu thành viên trong Union đó. Chứ không phải một biến Union là có nhiều giá trị khác nhau. Và điều này cũng dễ dẫn tới những sự mơ hồ về kiểu dữ liệu của một biến. Để chương trình chạy đúng và an toàn hơn, chúng ta nên dùng `typeof` để kiểm tra kiểu dữ liệu trước. Ví dụ nha:

```ts
function printId(id: string | number) {
  if (typeof id === 'string') {
    console.log(`Your ID is ${id.toUpperCase()}`)
  } else {
    console.log(`Your ID is ${id}`)
  }
}
```

Hoặc kiểm tra mảng với `Array.isArray()`. 

## Type Alias

**Typescript** giúp bạn có thể tự định danh lại tên cho một kiểu dữ liệu nào đó hoặc các kiểu dữ liệu kết hợp. Điều này giúp cho tránh sự trùng lặp và tường minh trong quá trình code hơn. Xem ví dụ nhóe

```ts
type Name = string // string

type ID = string | number // union

// object
type User = {
  id: UserId
  name: Username
  role?: string
}

function printUser(user: User) {
  console.log(`Hello ${user.name}`)
}
```

### Interface

Ở trên, ta đề cập tới **Object Type** rồi, nhưng mới chỉ là sử dụng cho tham số hàm. Còn giờ ta khai báo nó xịn sò thành một kiểu luôn nhóe. Sử dụng từ khóa `interface`. Ví dụ

```ts
interface User = {
  id: string | number
  name: string
  role?: string
}

function printUser(user: User) {
  console.log(`Hello ${user.name}`)
}
```

Bạn cũng có thể khai báo 1 **Interface** khác kế thừa 1 **Interface**. Ví dụ tiếp

```ts
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const pet: Bear = { name: 'Poo', honey: true }
```

*Interface* đã có rồi, thì có thể thêm thuộc tính nữa vẫn được. Ví dụ tiếp nữa.

```ts
interface Bear {
  name: string
}

interface Bear {
  honey: boolean
}
```

### Type vs. Interface

Giống nhau là chúng có thể kế thừa lại các *Type* hay *Interface* khác. Ví dụ:

* **Interface**

```ts
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear() 
bear.name
bear.honey
```

* **Type**

```ts
type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: boolean 
}

const bear = getBear();
bear.name;
bear.honey;
```

**Khác nhau** là *Type* không thể thêm thuộc tính như *Interface* được.

```ts
type Bear = {
  name: string
}

//Error: Duplicate identifier 'Bear'.
type Bear = {
  honey: boolean
}
```

Trong hầu hết các trường hợp, bạn nên dùng **interface** để khai báo kiểu cho **object** nhoa.


## Ghi chú

> *Chưa có gì hết. Ahihi!*

---

*(Chúc bạn một ngày tốt lành và cảm ơn bạn đã ghé thăm repo này.)*