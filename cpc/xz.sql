SET NAMES UTF8;
DROP DATABASE IF EXISTS cpc;
CREATE DATABASE cpc CHARSET=UTF8;
USE cpc;


/**主页轮播图片数据库**/
CREATE TABLE cpc_index_corsouel(
  icid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT ,
  ic_img VARCHAR(64),
  ic_pid VARCHAR(32),
  ic_time DATETIME,
  ic_ip VARCHAR(16)
);



/*******************/
/******数据导入******/
/*******************/
/**轮播图片与ID**/
INSERT INTO cpc_index_corsouel VALUES
(NULL,1, './static/img/index/background1.jpg', '34356734', now(), "172.0.0.1"),
(NULL,3, './static/img/index/background2.jpg', '23445554', now(), "172.0.0.1"),
(NULL,3, './static/img/index/background3.jpg', '34543534', now(), "172.0.0.1"),
(NULL,1, './static/img/index/background4.jpg', '44444434', now(), "172.0.0.1");


/