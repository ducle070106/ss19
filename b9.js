let result = "javascript" + 5;//"javascript5" vì "javascript" là chuỗi nên "+" sẽ nối chuỗi
result = "javascript" - 1;//'NaN' vì '-' vưới chuỗi sẽ đổi nó thành số mà số 'javascript' không hợp lệ
result = "3" + 2;//"32" vì "3" là chuỗi nên '+' sẽ nối chuỗi
result = "5" - 4;//'1' vì '-' vưới chuỗi sẽ đổi nó thành chuỗi nên thực hiện phép tính bình thường
result =  isNaN("123");//'false' vì "123" có thể coi là số '123'
result = isNaN("hello");//'true' vì "hello" không thể coi là số hợp lệ
result = Number.isNaN("123");//'false' vì "123" là chuỗi, không phải 'NaN'
result = Number.isNaN(NaN);//'true' vì 'NaN' là 'NaN'