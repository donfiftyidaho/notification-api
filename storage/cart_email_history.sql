/*
 Navicat MySQL Data Transfer

 Source Server         : FF-Dev
 Source Server Type    : MySQL
 Source Server Version : 50610
 Source Host           : dev-aurora-cluster.cluster-collu5gxyjqo.us-east-1.rds.amazonaws.com
 Source Database       : flower0_CartCmsFromProd

 Target Server Type    : MySQL
 Target Server Version : 50610
 File Encoding         : utf-8

 Date: 02/27/2019 12:06:58 PM
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `cart_email_history`
-- ----------------------------
DROP TABLE IF EXISTS `cart_email_history`;
CREATE TABLE `cart_email_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_time` datetime DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  `email_subject` varchar(100) DEFAULT NULL,
  `email_from` varchar(100) DEFAULT NULL,
  `email_to` varchar(100) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL,
  `po_id` int(11) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL,
  `delivery_status` char(1) DEFAULT NULL,
  `delivery_error_msg` varchar(100) DEFAULT NULL,
  `user_id` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_type_idx` (`type_id`,`order_id`,`user_id`),
  CONSTRAINT `fk_type` FOREIGN KEY (`type_id`) REFERENCES `cart_email_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=130432 DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS = 1;
