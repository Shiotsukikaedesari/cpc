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
/**主页弹幕数据库**/
CREATE TABLE cpc_index_barrage(
	ibid INT PRIMARY KEY AUTO_INCREMENT,
	uid INT,
	ib_msg VARCHAR(64),
	ib_color VARCHAR(12),
	ib_time DATETIME ,
	ib_ip VARCHAR(16)
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

/**弹幕数据导入**/
INSERT INTO cpc_index_barrage VALUES
(NULL, 1, "测试弹幕用语1", "#fff", now(), "127.0.0.1"),
(NULL, 1, "测试弹幕用语2", "#ec3838", now(), "127.0.0.1"),
(NULL, 1, "测试弹幕用语3", "#efe838", now(), "127.0.0.1"),
(NULL, 1, "测试弹幕用语4", "#38ec8a", now(), "127.0.0.1"),
(NULL, 1, "测试弹幕用语5", "#b138ec", now(), "127.0.0.1"),
(NULL, 1, "测试弹幕用语6", "#0100ff", now(), "127.0.0.1"),
(NULL, 1, "测试弹幕用语7", "#0111ff", now(), "127.0.0.1"),
(NULL, 1, "测试弹幕用语8", "#ff6700", now(), "127.0.0.1"),
(NULL, 1, "测试弹幕用语9", "#00ff34", now(), "127.0.0.1"),
(NULL, 1, "测试弹幕用语10", "#fff", now(), "127.0.0.1"),
(NULL, 1, "测试弹幕用语11", "#fff", now(), "127.0.0.1"),
(NULL, 1, "测试弹幕用语12", "#00ff34", now(), "127.0.0.1"),
(NULL, 1, "测试弹幕用语13", "#fff", now(), "127.0.0.1"),
(NULL, 1, "测试弹幕用语14", "#b138ec", now(), "127.0.0.1"),
(NULL, 1, "测试弹幕用语15", "#fff", now(), "127.0.0.1"),
(NULL, 1, "长句测试弹幕，测试弹幕用语16", "#00ff34", now(), "127.0.0.1"),
(NULL, 1, "长句测试，这是一条长句，测试弹幕用语17", "#fff", now(), "127.0.0.1"),
(NULL, 1, "测试弹幕用语18", "#fff", now(), "127.0.0.1"),
(NULL, 1, "测试弹幕用语19", "#b138ec", now(), "127.0.0.1"),
(NULL, 1, "超长句测试，单挑弹幕上限为六十四字符，测试用弹幕语句，测试弹幕用语20", "#fff", now(), "127.0.0.1"),
(NULL, 1, "测试弹幕用语21", "#b138ec", now(), "127.0.0.1"),
(NULL, 1, "测试弹幕用语22", "#fff", now(), "127.0.0.1");
/