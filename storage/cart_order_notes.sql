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

 Date: 02/27/2019 12:07:12 PM
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `cart_order_notes`
-- ----------------------------
DROP TABLE IF EXISTS `cart_order_notes`;
CREATE TABLE `cart_order_notes` (
  `note_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `order_id` int(10) unsigned NOT NULL DEFAULT '0',
  `rep_name` varchar(255) NOT NULL DEFAULT '',
  `employee_id` int(11) NOT NULL DEFAULT '0',
  `note` mediumtext NOT NULL,
  `note_date_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`note_id`),
  KEY `order_id` (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1599238 DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS = 1;
