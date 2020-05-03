# Covid Tracker by. jackerle
## Version 1.1.0
## Created with React+leafletjs

### installed
#### 1. clone this repository
``` 
$git clone https://github.com/jackerle/covid_tracker
```

#### 2. install required module (Use NPM)
```
$npm install 
```

#### 3. run with
```
$npm start
```

### v.1.0.0 23/4/2562
release     

### v.1.0.1 25/4/2562
- เพิ่ม 7 จังหวัดที่ไม่มีผู้ติดเชื้อและไม่มีรายชื่อใน api    

### v.1.1.0  29/4/2562
- เพิ่ม Popup เมื่อ select จังหวัดและแสดงผู้ติดเชื้อในแต่ละเคส
- สามารถคลิ้กข้างนอก Popup เพื่อปิดตัว Popup ได้
- เพิ่ม dependency โดยใช้ material-ui เพื่อใช้ทำ ClickAway มาปิด Popup

### v.1.1.1 4/5/2562
- เพิ่มการทำ CI (Continuos Integration) ให้แก่ Project โดยสามารถ Unit Test ผ่าน Github Actions ได้