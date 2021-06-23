# 202112713_KCH
## ⌨ 키보드 정보 페이지

<br>
<img src="views/lib/main.JPG" alt="main"></img>
<img src="views/lib/modal.png" alt="main"></img>
<br>
<br>


### 🔗 AWS
---
<http://3.37.114.15/:3000/><BR>
교수님 안녕하세요 김창환 입니다.
로컬에서 WSL을 사용하여 작업 하고, GIT에 COMIIT을 했습니다.
이후에 WSL 설정후에 기존에 로컬 WSL에서 작업한 GIT을 가져오는 과정에서 AWS의 접속이 끊어지고, 다시 연결을 시도했지만 계속 연결 실패, 연결 이후 15초 이내에 접속이 끊어지는 문제가 발생했습니다.
해당 문제 해결을 위해 정보도 찾아보고, 인스턴스 재구성, 인스턴스 OS 변경 등 다양한 방법을 시도했지만 해결하지 못해서 부득이하게 AWS에서 PM2까지 실행하지는 못했습니다.
연결 과정은 인스턴스 구성후 KEY를 발급받아 PUTTYGEN을 사용한 파일변환, SSH config 파일작성하고, vscode에 Remote-SSH 0.65.7을 사용했습니다.

<br>

---
####  ⚡통신규약[GEt]
---
#### ⌨ 키보드 정보 입력

| URL | 메소드 | 
|:---:|:---:|
|/io-info/keyboard/create|GET|


#### ⌨ 키보드 정보 수정

| URL | 메소드 | 
|:---:|:---:|
|/io-info/keyboard/create|GET|

#### ⌨ 키보드 정보 삭제

| URL | 메소드 | 
|:---:|:---:|
|/io-info/keyboard/create|GET|

#### ⌨ 키보드 전체 조회

| URL | 메소드 | 
|:---:|:---:|
|/io-info/keyboard|GET|

| 메세지 구조 |  | | 
|:---|:---|:---| 
|msg| | 성공/실패 메세지| 
|data| | 책 입력 정보|
| | no | 제품 번호 |
| | name | 키보드 명 |
| | brand | 키보드 브랜드 |
| | keytype | 키보드 타입 |
| | status | 키보드 유형 |
| | code | 키보드 layout |
| | price | 키보드 가격 |
<br>

> <b>메세지 예</b>
```json
{
    "msg": "select list success",
    "data": [
        {
            "no": 1,
            "name": "ck87",
            "brand": "앱코",
            "keytype": "기계식",
            "status": "유선",
            "code": "87kwy",
            "price": 39800
        },
        {
            "no": 1,
            "name": "ck108 BT",
            "brand": "앱코",
            "keytype": "기계식",
            "status": "무선",
            "code": "108kwy",
            "price": 59800
        }
    ]
}
```

<BR>
---
####  ⚡통신규약[GEt]
---

#### ⌨ 키보드 정보 입력(DB 입력)
<br>

| URL | 메소드 | 
|:---:|:---:|
|/io-info/keyboard/create|POST|
<br>

| 메세지 구조 |  | | 
|:---|:---|:---| 
|data| | 책 입력 정보|
| | no | 제품 번호 |
<br>

> <b>메세지 예</b>
```json
{
    "msg": "select list success",
    "data": [
        {
            "no": 1
        }
    ]
}
```



####  ⚡ 데이터베이스 설계
---
<br>

|데이터 베이스| 
|:---:| 
|idu_node_final_db|
<br>

|테이블명| 
|:---:| 
|keyboard|
<br>

|칼럼명|칼럼ID|타입(길이)| PK | NN |AI|비고| 
|:---|:---:|:---|:---:|:---|:---:|:---:| 
|키보드 번호|no|int(11)|O|O|O| | 
|키보드 명|name|varchar(255)|||| | 
|키보드 브랜드|brand|varchar(255)|||| | 
|키보드 타입|keytype|varchar(255)|||| | 
|키보드 유형|status|varchar(255)||||유선/무선 | 
|키보드 layout|code|varchar(255)|||| key code| 
|키보드 가격|price|int(11)|||| | 
<br>

