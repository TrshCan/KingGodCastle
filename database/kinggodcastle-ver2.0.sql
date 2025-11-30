-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: db
-- Thời gian đã tạo: Th10 30, 2025 lúc 05:55 PM
-- Phiên bản máy phục vụ: 8.4.6
-- Phiên bản PHP: 8.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `kinggodcastle`
--
CREATE DATABASE IF NOT EXISTS `kinggodcastle` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `kinggodcastle`;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`, `created_at`, `updated_at`, `deleted_at`) VALUES
('laravel-cache-lighthouse:query:f0234a93703e74109677d0e5b1a51615f62af7d813285a63b666aa66c33e8e6e', 'O:33:\"GraphQL\\Language\\AST\\DocumentNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:0;s:3:\"end\";i:259;s:10:\"startToken\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:5:\"<SOF>\";s:5:\"start\";i:0;s:3:\"end\";i:0;s:4:\"line\";i:0;s:6:\"column\";i:0;s:5:\"value\";N;s:4:\"prev\";N;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:4:\"Name\";s:5:\"start\";i:0;s:3:\"end\";i:8;s:4:\"line\";i:1;s:6:\"column\";i:1;s:5:\"value\";s:8:\"mutation\";s:4:\"prev\";r:5;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:4:\"Name\";s:5:\"start\";i:9;s:3:\"end\";i:14;s:4:\"line\";i:1;s:6:\"column\";i:10;s:5:\"value\";s:5:\"login\";s:4:\"prev\";r:13;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\"(\";s:5:\"start\";i:14;s:3:\"end\";i:15;s:4:\"line\";i:1;s:6:\"column\";i:15;s:5:\"value\";N;s:4:\"prev\";r:21;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\"$\";s:5:\"start\";i:15;s:3:\"end\";i:16;s:4:\"line\";i:1;s:6:\"column\";i:16;s:5:\"value\";N;s:4:\"prev\";r:29;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:4:\"Name\";s:5:\"start\";i:16;s:3:\"end\";i:21;s:4:\"line\";i:1;s:6:\"column\";i:17;s:5:\"value\";s:5:\"email\";s:4:\"prev\";r:37;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\":\";s:5:\"start\";i:21;s:3:\"end\";i:22;s:4:\"line\";i:1;s:6:\"column\";i:22;s:5:\"value\";N;s:4:\"prev\";r:45;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:4:\"Name\";s:5:\"start\";i:23;s:3:\"end\";i:29;s:4:\"line\";i:1;s:6:\"column\";i:24;s:5:\"value\";s:6:\"String\";s:4:\"prev\";r:53;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\"!\";s:5:\"start\";i:29;s:3:\"end\";i:30;s:4:\"line\";i:1;s:6:\"column\";i:30;s:5:\"value\";N;s:4:\"prev\";r:61;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\"$\";s:5:\"start\";i:32;s:3:\"end\";i:33;s:4:\"line\";i:1;s:6:\"column\";i:33;s:5:\"value\";N;s:4:\"prev\";r:69;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:4:\"Name\";s:5:\"start\";i:33;s:3:\"end\";i:41;s:4:\"line\";i:1;s:6:\"column\";i:34;s:5:\"value\";s:8:\"password\";s:4:\"prev\";r:77;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\":\";s:5:\"start\";i:41;s:3:\"end\";i:42;s:4:\"line\";i:1;s:6:\"column\";i:42;s:5:\"value\";N;s:4:\"prev\";r:85;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:4:\"Name\";s:5:\"start\";i:43;s:3:\"end\";i:49;s:4:\"line\";i:1;s:6:\"column\";i:44;s:5:\"value\";s:6:\"String\";s:4:\"prev\";r:93;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\"!\";s:5:\"start\";i:49;s:3:\"end\";i:50;s:4:\"line\";i:1;s:6:\"column\";i:50;s:5:\"value\";N;s:4:\"prev\";r:101;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\")\";s:5:\"start\";i:50;s:3:\"end\";i:51;s:4:\"line\";i:1;s:6:\"column\";i:51;s:5:\"value\";N;s:4:\"prev\";r:109;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\"{\";s:5:\"start\";i:52;s:3:\"end\";i:53;s:4:\"line\";i:1;s:6:\"column\";i:53;s:5:\"value\";N;s:4:\"prev\";r:117;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:4:\"Name\";s:5:\"start\";i:64;s:3:\"end\";i:69;s:4:\"line\";i:2;s:6:\"column\";i:11;s:5:\"value\";s:5:\"login\";s:4:\"prev\";r:125;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\"(\";s:5:\"start\";i:69;s:3:\"end\";i:70;s:4:\"line\";i:2;s:6:\"column\";i:16;s:5:\"value\";N;s:4:\"prev\";r:133;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:4:\"Name\";s:5:\"start\";i:70;s:3:\"end\";i:75;s:4:\"line\";i:2;s:6:\"column\";i:17;s:5:\"value\";s:5:\"email\";s:4:\"prev\";r:141;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\":\";s:5:\"start\";i:75;s:3:\"end\";i:76;s:4:\"line\";i:2;s:6:\"column\";i:22;s:5:\"value\";N;s:4:\"prev\";r:149;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\"$\";s:5:\"start\";i:77;s:3:\"end\";i:78;s:4:\"line\";i:2;s:6:\"column\";i:24;s:5:\"value\";N;s:4:\"prev\";r:157;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:4:\"Name\";s:5:\"start\";i:78;s:3:\"end\";i:83;s:4:\"line\";i:2;s:6:\"column\";i:25;s:5:\"value\";s:5:\"email\";s:4:\"prev\";r:165;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:4:\"Name\";s:5:\"start\";i:85;s:3:\"end\";i:93;s:4:\"line\";i:2;s:6:\"column\";i:32;s:5:\"value\";s:8:\"password\";s:4:\"prev\";r:173;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\":\";s:5:\"start\";i:93;s:3:\"end\";i:94;s:4:\"line\";i:2;s:6:\"column\";i:40;s:5:\"value\";N;s:4:\"prev\";r:181;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\"$\";s:5:\"start\";i:95;s:3:\"end\";i:96;s:4:\"line\";i:2;s:6:\"column\";i:42;s:5:\"value\";N;s:4:\"prev\";r:189;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:4:\"Name\";s:5:\"start\";i:96;s:3:\"end\";i:104;s:4:\"line\";i:2;s:6:\"column\";i:43;s:5:\"value\";s:8:\"password\";s:4:\"prev\";r:197;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\")\";s:5:\"start\";i:104;s:3:\"end\";i:105;s:4:\"line\";i:2;s:6:\"column\";i:51;s:5:\"value\";N;s:4:\"prev\";r:205;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\"{\";s:5:\"start\";i:106;s:3:\"end\";i:107;s:4:\"line\";i:2;s:6:\"column\";i:53;s:5:\"value\";N;s:4:\"prev\";r:213;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:4:\"Name\";s:5:\"start\";i:120;s:3:\"end\";i:125;s:4:\"line\";i:3;s:6:\"column\";i:13;s:5:\"value\";s:5:\"token\";s:4:\"prev\";r:221;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:4:\"Name\";s:5:\"start\";i:138;s:3:\"end\";i:142;s:4:\"line\";i:4;s:6:\"column\";i:13;s:5:\"value\";s:4:\"user\";s:4:\"prev\";r:229;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\"{\";s:5:\"start\";i:143;s:3:\"end\";i:144;s:4:\"line\";i:4;s:6:\"column\";i:18;s:5:\"value\";N;s:4:\"prev\";r:237;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:4:\"Name\";s:5:\"start\";i:159;s:3:\"end\";i:161;s:4:\"line\";i:5;s:6:\"column\";i:15;s:5:\"value\";s:2:\"id\";s:4:\"prev\";r:245;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:4:\"Name\";s:5:\"start\";i:176;s:3:\"end\";i:181;s:4:\"line\";i:6;s:6:\"column\";i:15;s:5:\"value\";s:5:\"email\";s:4:\"prev\";r:253;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:4:\"Name\";s:5:\"start\";i:196;s:3:\"end\";i:204;s:4:\"line\";i:7;s:6:\"column\";i:15;s:5:\"value\";s:8:\"username\";s:4:\"prev\";r:261;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:4:\"Name\";s:5:\"start\";i:219;s:3:\"end\";i:223;s:4:\"line\";i:8;s:6:\"column\";i:15;s:5:\"value\";s:4:\"role\";s:4:\"prev\";r:269;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\"}\";s:5:\"start\";i:236;s:3:\"end\";i:237;s:4:\"line\";i:9;s:6:\"column\";i:13;s:5:\"value\";N;s:4:\"prev\";r:277;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\"}\";s:5:\"start\";i:248;s:3:\"end\";i:249;s:4:\"line\";i:10;s:6:\"column\";i:11;s:5:\"value\";N;s:4:\"prev\";r:285;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:1:\"}\";s:5:\"start\";i:258;s:3:\"end\";i:259;s:4:\"line\";i:11;s:6:\"column\";i:9;s:5:\"value\";N;s:4:\"prev\";r:293;s:4:\"next\";O:22:\"GraphQL\\Language\\Token\":8:{s:4:\"kind\";s:5:\"<EOF>\";s:5:\"start\";i:259;s:3:\"end\";i:259;s:4:\"line\";i:11;s:6:\"column\";i:10;s:5:\"value\";N;s:4:\"prev\";r:301;s:4:\"next\";N;}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}s:8:\"endToken\";r:309;s:6:\"source\";O:23:\"GraphQL\\Language\\Source\":4:{s:4:\"body\";s:259:\"mutation login($email: String!, $password: String!) {\n          login(email: $email, password: $password) {\n            token\n            user {\n              id\n              email\n              username\n              role\n            }\n          }\n        }\";s:6:\"length\";i:259;s:4:\"name\";s:15:\"GraphQL request\";s:14:\"locationOffset\";O:31:\"GraphQL\\Language\\SourceLocation\":2:{s:4:\"line\";i:1;s:6:\"column\";i:1;}}}s:4:\"kind\";s:8:\"Document\";s:11:\"definitions\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:1:{i:0;O:44:\"GraphQL\\Language\\AST\\OperationDefinitionNode\":7:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:0;s:3:\"end\";i:259;s:10:\"startToken\";r:13;s:8:\"endToken\";r:301;s:6:\"source\";r:319;}s:4:\"kind\";s:19:\"OperationDefinition\";s:4:\"name\";O:29:\"GraphQL\\Language\\AST\\NameNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:9;s:3:\"end\";i:14;s:10:\"startToken\";r:21;s:8:\"endToken\";r:21;s:6:\"source\";r:319;}s:4:\"kind\";s:4:\"Name\";s:5:\"value\";s:5:\"login\";}s:9:\"operation\";s:8:\"mutation\";s:19:\"variableDefinitions\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:2:{i:0;O:43:\"GraphQL\\Language\\AST\\VariableDefinitionNode\":6:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:15;s:3:\"end\";i:30;s:10:\"startToken\";r:37;s:8:\"endToken\";r:69;s:6:\"source\";r:319;}s:4:\"kind\";s:18:\"VariableDefinition\";s:8:\"variable\";O:33:\"GraphQL\\Language\\AST\\VariableNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:15;s:3:\"end\";i:21;s:10:\"startToken\";r:37;s:8:\"endToken\";r:45;s:6:\"source\";r:319;}s:4:\"kind\";s:8:\"Variable\";s:4:\"name\";O:29:\"GraphQL\\Language\\AST\\NameNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:16;s:3:\"end\";i:21;s:10:\"startToken\";r:45;s:8:\"endToken\";r:45;s:6:\"source\";r:319;}s:4:\"kind\";s:4:\"Name\";s:5:\"value\";s:5:\"email\";}}s:4:\"type\";O:36:\"GraphQL\\Language\\AST\\NonNullTypeNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:23;s:3:\"end\";i:30;s:10:\"startToken\";r:61;s:8:\"endToken\";r:69;s:6:\"source\";r:319;}s:4:\"kind\";s:11:\"NonNullType\";s:4:\"type\";O:34:\"GraphQL\\Language\\AST\\NamedTypeNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:23;s:3:\"end\";i:29;s:10:\"startToken\";r:61;s:8:\"endToken\";r:61;s:6:\"source\";r:319;}s:4:\"kind\";s:9:\"NamedType\";s:4:\"name\";O:29:\"GraphQL\\Language\\AST\\NameNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:23;s:3:\"end\";i:29;s:10:\"startToken\";r:61;s:8:\"endToken\";r:61;s:6:\"source\";r:319;}s:4:\"kind\";s:4:\"Name\";s:5:\"value\";s:6:\"String\";}}}s:12:\"defaultValue\";N;s:10:\"directives\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:0:{}}}i:1;O:43:\"GraphQL\\Language\\AST\\VariableDefinitionNode\":6:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:32;s:3:\"end\";i:50;s:10:\"startToken\";r:77;s:8:\"endToken\";r:109;s:6:\"source\";r:319;}s:4:\"kind\";s:18:\"VariableDefinition\";s:8:\"variable\";O:33:\"GraphQL\\Language\\AST\\VariableNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:32;s:3:\"end\";i:41;s:10:\"startToken\";r:77;s:8:\"endToken\";r:85;s:6:\"source\";r:319;}s:4:\"kind\";s:8:\"Variable\";s:4:\"name\";O:29:\"GraphQL\\Language\\AST\\NameNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:33;s:3:\"end\";i:41;s:10:\"startToken\";r:85;s:8:\"endToken\";r:85;s:6:\"source\";r:319;}s:4:\"kind\";s:4:\"Name\";s:5:\"value\";s:8:\"password\";}}s:4:\"type\";O:36:\"GraphQL\\Language\\AST\\NonNullTypeNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:43;s:3:\"end\";i:50;s:10:\"startToken\";r:101;s:8:\"endToken\";r:109;s:6:\"source\";r:319;}s:4:\"kind\";s:11:\"NonNullType\";s:4:\"type\";O:34:\"GraphQL\\Language\\AST\\NamedTypeNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:43;s:3:\"end\";i:49;s:10:\"startToken\";r:101;s:8:\"endToken\";r:101;s:6:\"source\";r:319;}s:4:\"kind\";s:9:\"NamedType\";s:4:\"name\";O:29:\"GraphQL\\Language\\AST\\NameNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:43;s:3:\"end\";i:49;s:10:\"startToken\";r:101;s:8:\"endToken\";r:101;s:6:\"source\";r:319;}s:4:\"kind\";s:4:\"Name\";s:5:\"value\";s:6:\"String\";}}}s:12:\"defaultValue\";N;s:10:\"directives\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:0:{}}}}}s:10:\"directives\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:0:{}}s:12:\"selectionSet\";O:37:\"GraphQL\\Language\\AST\\SelectionSetNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:52;s:3:\"end\";i:259;s:10:\"startToken\";r:125;s:8:\"endToken\";r:301;s:6:\"source\";r:319;}s:4:\"kind\";s:12:\"SelectionSet\";s:10:\"selections\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:1:{i:0;O:30:\"GraphQL\\Language\\AST\\FieldNode\":7:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:64;s:3:\"end\";i:249;s:10:\"startToken\";r:133;s:8:\"endToken\";r:293;s:6:\"source\";r:319;}s:4:\"kind\";s:5:\"Field\";s:4:\"name\";O:29:\"GraphQL\\Language\\AST\\NameNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:64;s:3:\"end\";i:69;s:10:\"startToken\";r:133;s:8:\"endToken\";r:133;s:6:\"source\";r:319;}s:4:\"kind\";s:4:\"Name\";s:5:\"value\";s:5:\"login\";}s:5:\"alias\";N;s:9:\"arguments\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:2:{i:0;O:33:\"GraphQL\\Language\\AST\\ArgumentNode\":4:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:70;s:3:\"end\";i:83;s:10:\"startToken\";r:149;s:8:\"endToken\";r:173;s:6:\"source\";r:319;}s:4:\"kind\";s:8:\"Argument\";s:5:\"value\";O:33:\"GraphQL\\Language\\AST\\VariableNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:77;s:3:\"end\";i:83;s:10:\"startToken\";r:165;s:8:\"endToken\";r:173;s:6:\"source\";r:319;}s:4:\"kind\";s:8:\"Variable\";s:4:\"name\";O:29:\"GraphQL\\Language\\AST\\NameNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:78;s:3:\"end\";i:83;s:10:\"startToken\";r:173;s:8:\"endToken\";r:173;s:6:\"source\";r:319;}s:4:\"kind\";s:4:\"Name\";s:5:\"value\";s:5:\"email\";}}s:4:\"name\";O:29:\"GraphQL\\Language\\AST\\NameNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:70;s:3:\"end\";i:75;s:10:\"startToken\";r:149;s:8:\"endToken\";r:149;s:6:\"source\";r:319;}s:4:\"kind\";s:4:\"Name\";s:5:\"value\";s:5:\"email\";}}i:1;O:33:\"GraphQL\\Language\\AST\\ArgumentNode\":4:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:85;s:3:\"end\";i:104;s:10:\"startToken\";r:181;s:8:\"endToken\";r:205;s:6:\"source\";r:319;}s:4:\"kind\";s:8:\"Argument\";s:5:\"value\";O:33:\"GraphQL\\Language\\AST\\VariableNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:95;s:3:\"end\";i:104;s:10:\"startToken\";r:197;s:8:\"endToken\";r:205;s:6:\"source\";r:319;}s:4:\"kind\";s:8:\"Variable\";s:4:\"name\";O:29:\"GraphQL\\Language\\AST\\NameNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:96;s:3:\"end\";i:104;s:10:\"startToken\";r:205;s:8:\"endToken\";r:205;s:6:\"source\";r:319;}s:4:\"kind\";s:4:\"Name\";s:5:\"value\";s:8:\"password\";}}s:4:\"name\";O:29:\"GraphQL\\Language\\AST\\NameNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:85;s:3:\"end\";i:93;s:10:\"startToken\";r:181;s:8:\"endToken\";r:181;s:6:\"source\";r:319;}s:4:\"kind\";s:4:\"Name\";s:5:\"value\";s:8:\"password\";}}}}s:10:\"directives\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:0:{}}s:12:\"selectionSet\";O:37:\"GraphQL\\Language\\AST\\SelectionSetNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:106;s:3:\"end\";i:249;s:10:\"startToken\";r:221;s:8:\"endToken\";r:293;s:6:\"source\";r:319;}s:4:\"kind\";s:12:\"SelectionSet\";s:10:\"selections\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:2:{i:0;O:30:\"GraphQL\\Language\\AST\\FieldNode\":7:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:120;s:3:\"end\";i:125;s:10:\"startToken\";r:229;s:8:\"endToken\";r:229;s:6:\"source\";r:319;}s:4:\"kind\";s:5:\"Field\";s:4:\"name\";O:29:\"GraphQL\\Language\\AST\\NameNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:120;s:3:\"end\";i:125;s:10:\"startToken\";r:229;s:8:\"endToken\";r:229;s:6:\"source\";r:319;}s:4:\"kind\";s:4:\"Name\";s:5:\"value\";s:5:\"token\";}s:5:\"alias\";N;s:9:\"arguments\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:0:{}}s:10:\"directives\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:0:{}}s:12:\"selectionSet\";N;}i:1;O:30:\"GraphQL\\Language\\AST\\FieldNode\":7:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:138;s:3:\"end\";i:237;s:10:\"startToken\";r:237;s:8:\"endToken\";r:285;s:6:\"source\";r:319;}s:4:\"kind\";s:5:\"Field\";s:4:\"name\";O:29:\"GraphQL\\Language\\AST\\NameNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:138;s:3:\"end\";i:142;s:10:\"startToken\";r:237;s:8:\"endToken\";r:237;s:6:\"source\";r:319;}s:4:\"kind\";s:4:\"Name\";s:5:\"value\";s:4:\"user\";}s:5:\"alias\";N;s:9:\"arguments\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:0:{}}s:10:\"directives\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:0:{}}s:12:\"selectionSet\";O:37:\"GraphQL\\Language\\AST\\SelectionSetNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:143;s:3:\"end\";i:237;s:10:\"startToken\";r:245;s:8:\"endToken\";r:285;s:6:\"source\";r:319;}s:4:\"kind\";s:12:\"SelectionSet\";s:10:\"selections\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:4:{i:0;O:30:\"GraphQL\\Language\\AST\\FieldNode\":7:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:159;s:3:\"end\";i:161;s:10:\"startToken\";r:253;s:8:\"endToken\";r:253;s:6:\"source\";r:319;}s:4:\"kind\";s:5:\"Field\";s:4:\"name\";O:29:\"GraphQL\\Language\\AST\\NameNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:159;s:3:\"end\";i:161;s:10:\"startToken\";r:253;s:8:\"endToken\";r:253;s:6:\"source\";r:319;}s:4:\"kind\";s:4:\"Name\";s:5:\"value\";s:2:\"id\";}s:5:\"alias\";N;s:9:\"arguments\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:0:{}}s:10:\"directives\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:0:{}}s:12:\"selectionSet\";N;}i:1;O:30:\"GraphQL\\Language\\AST\\FieldNode\":7:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:176;s:3:\"end\";i:181;s:10:\"startToken\";r:261;s:8:\"endToken\";r:261;s:6:\"source\";r:319;}s:4:\"kind\";s:5:\"Field\";s:4:\"name\";O:29:\"GraphQL\\Language\\AST\\NameNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:176;s:3:\"end\";i:181;s:10:\"startToken\";r:261;s:8:\"endToken\";r:261;s:6:\"source\";r:319;}s:4:\"kind\";s:4:\"Name\";s:5:\"value\";s:5:\"email\";}s:5:\"alias\";N;s:9:\"arguments\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:0:{}}s:10:\"directives\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:0:{}}s:12:\"selectionSet\";N;}i:2;O:30:\"GraphQL\\Language\\AST\\FieldNode\":7:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:196;s:3:\"end\";i:204;s:10:\"startToken\";r:269;s:8:\"endToken\";r:269;s:6:\"source\";r:319;}s:4:\"kind\";s:5:\"Field\";s:4:\"name\";O:29:\"GraphQL\\Language\\AST\\NameNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:196;s:3:\"end\";i:204;s:10:\"startToken\";r:269;s:8:\"endToken\";r:269;s:6:\"source\";r:319;}s:4:\"kind\";s:4:\"Name\";s:5:\"value\";s:8:\"username\";}s:5:\"alias\";N;s:9:\"arguments\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:0:{}}s:10:\"directives\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:0:{}}s:12:\"selectionSet\";N;}i:3;O:30:\"GraphQL\\Language\\AST\\FieldNode\":7:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:219;s:3:\"end\";i:223;s:10:\"startToken\";r:277;s:8:\"endToken\";r:277;s:6:\"source\";r:319;}s:4:\"kind\";s:5:\"Field\";s:4:\"name\";O:29:\"GraphQL\\Language\\AST\\NameNode\":3:{s:3:\"loc\";O:29:\"GraphQL\\Language\\AST\\Location\":5:{s:5:\"start\";i:219;s:3:\"end\";i:223;s:10:\"startToken\";r:277;s:8:\"endToken\";r:277;s:6:\"source\";r:319;}s:4:\"kind\";s:4:\"Name\";s:5:\"value\";s:4:\"role\";}s:5:\"alias\";N;s:9:\"arguments\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:0:{}}s:10:\"directives\";O:29:\"GraphQL\\Language\\AST\\NodeList\":1:{s:36:\"\0GraphQL\\Language\\AST\\NodeList\0nodes\";a:0:{}}s:12:\"selectionSet\";N;}}}}}}}}}}}}}}}}', 1764608921, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `classes`
--

CREATE TABLE `classes` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `icon` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `classes`
--

INSERT INTO `classes` (`id`, `name`, `description`, `icon`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Swiftness', 'Masters of agility and precision, the Swiftness class dances through battle with unparalleled speed. Their fluid movements make them nearly untouchable, striking foes with deadly accuracy before vanishing from sight.', NULL, NULL, NULL, NULL),
(2, 'Mystique', 'Enigmatic wielders of arcane power, the Mystique class commands ancient magic and mesmerizing illusions. Their unpredictable spells confound enemies, turning the tide of battle with otherworldly finesse.', NULL, NULL, NULL, NULL),
(3, 'Courage', 'Unyielding champions of valor, the Courage class charges fearlessly into the fray, igniting the hearts of allies. Their bold presence inspires unwavering resolve, rallying comrades to triumph against all odds.', NULL, NULL, NULL, NULL),
(4, 'Tenacity', 'Indomitable guardians of endurance, the Tenacity class stands firm through any ordeal, shielding allies with unshakable resolve. Their relentless spirit transforms hardship into unbreakable strength.', NULL, NULL, NULL, NULL),
(5, 'Shadow', 'Elusive predators of the night, the Shadow class strikes from the darkness with lethal precision. Masters of stealth and deception, they sow fear in their enemies, vanishing before retaliation can strike.', NULL, NULL, NULL, NULL),
(6, 'Element', 'Commanders of nature\'s fury, the Element class channels the primal forces of fire, water, wind, and earth. Their dynamic assaults shift like the tides, overwhelming foes with the raw power of the elements.', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `conditions`
--

CREATE TABLE `conditions` (
  `id` bigint UNSIGNED NOT NULL,
  `effect_id` bigint UNSIGNED DEFAULT NULL,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `conditions`
--

INSERT INTO `conditions` (`id`, `effect_id`, `key`, `description`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, NULL, 'self_hp_below', 'Condition: self hp below', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(2, NULL, 'self_hp_below_percent', 'Condition: self hp below percent', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(3, NULL, 'self_hp_above', 'Condition: self hp above', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(4, NULL, 'self_hp_above_percent', 'Condition: self hp above percent', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(5, NULL, 'target_hp_below', 'Condition: target hp below', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(6, NULL, 'target_hp_below_percent', 'Condition: target hp below percent', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(7, NULL, 'target_hp_above', 'Condition: target hp above', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(8, NULL, 'target_hp_above_percent', 'Condition: target hp above percent', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(9, NULL, 'self_mp_below', 'Condition: self mp below', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(10, NULL, 'self_mp_above', 'Condition: self mp above', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(11, NULL, 'self_mp_below_percent', 'Condition: self mp below percent', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(12, NULL, 'self_mp_above_percent', 'Condition: self mp above percent', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(13, NULL, 'attack_type', 'Condition: attack type', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(14, NULL, 'on_hit', 'Condition: on hit', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(15, NULL, 'on_crit', 'Condition: on crit', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(16, NULL, 'on_kill', 'Condition: on kill', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(17, NULL, 'on_damage_taken', 'Condition: on damage taken', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(18, NULL, 'on_damage_dealt', 'Condition: on damage dealt', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(19, NULL, 'on_hit_type', 'Condition: on hit type', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(20, NULL, 'damage_type', 'Condition: damage type', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(21, NULL, 'on_kill_type', 'Condition: on kill type', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(22, NULL, 'after_seconds', 'Condition: after seconds', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(23, NULL, 'interval_seconds', 'Condition: interval seconds', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(24, NULL, 'self_has_status', 'Condition: self has status', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(25, NULL, 'target_has_status', 'Condition: target has status', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(26, NULL, 'target_type', 'Condition: target type', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(27, NULL, 'after_using_skill_id', 'Condition: after using skill id', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(28, NULL, 'after_hit_count', 'Condition: after hit count', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(29, NULL, 'chance_bonus_percent', 'Condition: chance bonus percent', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(30, NULL, 'comparison_left', 'Condition: comparison left', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(31, NULL, 'comparison_operator', 'Condition: comparison operator', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL),
(32, NULL, 'comparison_right', 'Condition: comparison right', '2025-11-30 10:53:00', '2025-11-30 10:53:00', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `effects`
--

CREATE TABLE `effects` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `effects`
--

INSERT INTO `effects` (`id`, `name`, `type`, `description`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Modify Stat Flat', 'modify_stat_flat', 'Effect of type modify_stat_flat', '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(2, 'Modify Stat Percent', 'modify_stat_percent', 'Effect of type modify_stat_percent', '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(3, 'Multiply Stat', 'multiply_stat', 'Effect of type multiply_stat', '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(4, 'Apply Buff', 'apply_buff', 'Effect of type apply_buff', '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(5, 'Damage Over Time', 'damage_over_time', 'Effect of type damage_over_time', '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(6, 'Heal', 'heal', 'Effect of type heal', '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(7, 'Life Steal', 'life_steal', 'Effect of type life_steal', '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(8, 'Amplify Damage', 'amplify_damage', 'Effect of type amplify_damage', '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(9, 'Execution', 'execution', 'Effect of type execution', '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(10, 'Crit Chance', 'crit_chance', 'Effect of type crit_chance', '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(11, 'Crit Damage', 'crit_damage', 'Effect of type crit_damage', '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(12, 'Shield', 'shield', 'Effect of type shield', '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(13, 'Modify Damage Taken', 'modify_damage_taken', 'Effect of type modify_damage_taken', '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(14, 'Status Effect', 'status_effect', 'Effect of type status_effect', '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(15, 'Summon', 'summon', 'Effect of type summon', '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(16, 'Trigger Skill', 'trigger_skill', 'Effect of type trigger_skill', '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `effects_params`
--

CREATE TABLE `effects_params` (
  `id` bigint UNSIGNED NOT NULL,
  `effect_id` bigint UNSIGNED NOT NULL,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `effects_params`
--

INSERT INTO `effects_params` (`id`, `effect_id`, `key`, `value`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'stat', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(2, 1, 'value', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(3, 1, 'percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(4, 1, 'multiplier', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(5, 1, 'duration', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(6, 1, 'chance', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(7, 1, 'target', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(8, 1, 'category', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(9, 1, 'base_damage', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(10, 1, 'per_second', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(11, 1, 'percent_of_max_hp', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(12, 1, 'threshold_percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(13, 2, 'stat', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(14, 2, 'value', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(15, 2, 'percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(16, 2, 'multiplier', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(17, 2, 'duration', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(18, 2, 'chance', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(19, 2, 'target', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(20, 2, 'category', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(21, 2, 'base_damage', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(22, 2, 'per_second', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(23, 2, 'percent_of_max_hp', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(24, 2, 'threshold_percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(25, 3, 'stat', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(26, 3, 'value', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(27, 3, 'percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(28, 3, 'multiplier', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(29, 3, 'duration', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(30, 3, 'chance', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(31, 3, 'target', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(32, 3, 'category', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(33, 3, 'base_damage', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(34, 3, 'per_second', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(35, 3, 'percent_of_max_hp', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(36, 3, 'threshold_percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(37, 4, 'stat', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(38, 4, 'value', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(39, 4, 'percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(40, 4, 'multiplier', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(41, 4, 'duration', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(42, 4, 'chance', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(43, 4, 'target', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(44, 4, 'category', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(45, 4, 'base_damage', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(46, 4, 'per_second', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(47, 4, 'percent_of_max_hp', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(48, 4, 'threshold_percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(49, 5, 'stat', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(50, 5, 'value', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(51, 5, 'percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(52, 5, 'multiplier', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(53, 5, 'duration', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(54, 5, 'chance', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(55, 5, 'target', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(56, 5, 'category', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(57, 5, 'base_damage', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(58, 5, 'per_second', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(59, 5, 'percent_of_max_hp', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(60, 5, 'threshold_percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(61, 6, 'stat', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(62, 6, 'value', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(63, 6, 'percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(64, 6, 'multiplier', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(65, 6, 'duration', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(66, 6, 'chance', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(67, 6, 'target', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(68, 6, 'category', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(69, 6, 'base_damage', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(70, 6, 'per_second', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(71, 6, 'percent_of_max_hp', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(72, 6, 'threshold_percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(73, 7, 'stat', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(74, 7, 'value', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(75, 7, 'percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(76, 7, 'multiplier', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(77, 7, 'duration', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(78, 7, 'chance', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(79, 7, 'target', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(80, 7, 'category', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(81, 7, 'base_damage', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(82, 7, 'per_second', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(83, 7, 'percent_of_max_hp', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(84, 7, 'threshold_percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(85, 8, 'stat', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(86, 8, 'value', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(87, 8, 'percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(88, 8, 'multiplier', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(89, 8, 'duration', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(90, 8, 'chance', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(91, 8, 'target', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(92, 8, 'category', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(93, 8, 'base_damage', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(94, 8, 'per_second', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(95, 8, 'percent_of_max_hp', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(96, 8, 'threshold_percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(97, 9, 'stat', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(98, 9, 'value', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(99, 9, 'percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(100, 9, 'multiplier', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(101, 9, 'duration', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(102, 9, 'chance', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(103, 9, 'target', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(104, 9, 'category', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(105, 9, 'base_damage', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(106, 9, 'per_second', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(107, 9, 'percent_of_max_hp', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(108, 9, 'threshold_percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(109, 10, 'stat', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(110, 10, 'value', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(111, 10, 'percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(112, 10, 'multiplier', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(113, 10, 'duration', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(114, 10, 'chance', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(115, 10, 'target', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(116, 10, 'category', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(117, 10, 'base_damage', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(118, 10, 'per_second', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(119, 10, 'percent_of_max_hp', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(120, 10, 'threshold_percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(121, 11, 'stat', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(122, 11, 'value', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(123, 11, 'percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(124, 11, 'multiplier', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(125, 11, 'duration', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(126, 11, 'chance', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(127, 11, 'target', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(128, 11, 'category', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(129, 11, 'base_damage', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(130, 11, 'per_second', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(131, 11, 'percent_of_max_hp', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(132, 11, 'threshold_percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(133, 12, 'stat', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(134, 12, 'value', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(135, 12, 'percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(136, 12, 'multiplier', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(137, 12, 'duration', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(138, 12, 'chance', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(139, 12, 'target', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(140, 12, 'category', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(141, 12, 'base_damage', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(142, 12, 'per_second', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(143, 12, 'percent_of_max_hp', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(144, 12, 'threshold_percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(145, 13, 'stat', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(146, 13, 'value', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(147, 13, 'percent', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(148, 13, 'multiplier', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(149, 13, 'duration', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(150, 13, 'chance', NULL, '2025-11-30 10:52:54', '2025-11-30 10:52:54', NULL),
(151, 13, 'target', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(152, 13, 'category', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(153, 13, 'base_damage', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(154, 13, 'per_second', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(155, 13, 'percent_of_max_hp', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(156, 13, 'threshold_percent', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(157, 14, 'stat', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(158, 14, 'value', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(159, 14, 'percent', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(160, 14, 'multiplier', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(161, 14, 'duration', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(162, 14, 'chance', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(163, 14, 'target', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(164, 14, 'category', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(165, 14, 'base_damage', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(166, 14, 'per_second', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(167, 14, 'percent_of_max_hp', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(168, 14, 'threshold_percent', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(169, 15, 'stat', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(170, 15, 'value', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(171, 15, 'percent', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(172, 15, 'multiplier', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(173, 15, 'duration', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(174, 15, 'chance', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(175, 15, 'target', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(176, 15, 'category', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(177, 15, 'base_damage', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(178, 15, 'per_second', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(179, 15, 'percent_of_max_hp', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(180, 15, 'threshold_percent', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(181, 16, 'stat', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(182, 16, 'value', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(183, 16, 'percent', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(184, 16, 'multiplier', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(185, 16, 'duration', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(186, 16, 'chance', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(187, 16, 'target', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(188, 16, 'category', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(189, 16, 'base_damage', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(190, 16, 'per_second', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(191, 16, 'percent_of_max_hp', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL),
(192, 16, 'threshold_percent', NULL, '2025-11-30 10:52:55', '2025-11-30 10:52:55', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `enemies`
--

CREATE TABLE `enemies` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `region_id` bigint UNSIGNED DEFAULT NULL,
  `class_id` bigint UNSIGNED DEFAULT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `icon` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `enemy_base_stats`
--

CREATE TABLE `enemy_base_stats` (
  `id` bigint UNSIGNED NOT NULL,
  `enemy_id` bigint UNSIGNED NOT NULL,
  `ATK` int NOT NULL DEFAULT '0',
  `Spell` int NOT NULL DEFAULT '0',
  `ATK_SPEED` decimal(5,2) NOT NULL DEFAULT '1.00',
  `MP` int NOT NULL DEFAULT '0',
  `HP` int NOT NULL DEFAULT '0',
  `Damage_Dealt` int NOT NULL DEFAULT '0',
  `Normal_Attack_Amplification` decimal(5,2) NOT NULL DEFAULT '1.00',
  `Skill_Amplification` decimal(5,2) NOT NULL DEFAULT '1.00',
  `Special_Damage` int NOT NULL DEFAULT '0',
  `Physical_CRIT_Damage` decimal(5,2) NOT NULL DEFAULT '1.50',
  `Spell_CRIT_Damage` decimal(5,2) NOT NULL DEFAULT '1.50',
  `Physical_CRIT_Chance` decimal(5,2) NOT NULL DEFAULT '0.05',
  `Spell_CRIT_Chance` decimal(5,2) NOT NULL DEFAULT '0.05',
  `Physical_DEF` int NOT NULL DEFAULT '0',
  `Spell_DEF` int NOT NULL DEFAULT '0',
  `Mighty_Block` int NOT NULL DEFAULT '0',
  `Damage_Taken` int NOT NULL DEFAULT '0',
  `EVA` decimal(5,2) NOT NULL DEFAULT '0.05',
  `Outgoing_Healing` int NOT NULL DEFAULT '0',
  `Guard` int NOT NULL DEFAULT '0',
  `Physical_HP_Drain` decimal(5,2) NOT NULL DEFAULT '0.00',
  `Spell_HP_Drain` decimal(5,2) NOT NULL DEFAULT '0.00',
  `Execution_Rate` decimal(5,2) NOT NULL DEFAULT '0.00',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `enemy_skills`
--

CREATE TABLE `enemy_skills` (
  `id` bigint UNSIGNED NOT NULL,
  `enemy_id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `type` enum('passive','awakening','ultimate') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `friends`
--

CREATE TABLE `friends` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `friend_id` bigint UNSIGNED NOT NULL,
  `status` enum('pending','accepted') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `friends`
--

INSERT INTO `friends` (`id`, `user_id`, `friend_id`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 2, 'accepted', '2025-05-25 02:01:34', NULL, NULL),
(2, 2, 1, 'accepted', '2025-05-25 02:01:43', NULL, NULL),
(3, 3, 4, 'accepted', '2025-05-25 02:02:00', NULL, NULL),
(4, 4, 3, 'accepted', '2025-05-25 02:02:05', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `heroes`
--

CREATE TABLE `heroes` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `region_id` bigint UNSIGNED DEFAULT NULL,
  `class_id` bigint UNSIGNED DEFAULT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `icon` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `illustration` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `card` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `heroes`
--

INSERT INTO `heroes` (`id`, `name`, `region_id`, `class_id`, `title`, `description`, `icon`, `illustration`, `card`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Luniare', 2, 2, 'Blue Moonlight', 'Coming form the north where the Blue Moon rises, Luniare endlessly yearned for the Moon that rose every night, coming to harness its beauty to bless others.', 'Unit_10230.png', 'Unit_Illust_10230_02.png', '19-2.png', NULL, NULL, NULL),
(2, 'Shelda', 5, 4, 'Shield of Knights', 'Shelda always stands against enemies at the front line of the battlefield to honor her father, a legendary war hero.', 'Unit_10000_00.png', 'Unit_Illust_10000_00.png', '12_2.png', NULL, NULL, NULL),
(3, 'Evan', 5, 3, 'Sword of Valor', 'Evan, a talented swordman and tactician, ascended to the position of Knight Commander at such a tender age.', 'Unit_10030.png', 'Unit_Illust_10030.png', '5_2.png', NULL, NULL, NULL),
(4, 'Draco', 4, 6, 'Half-Dragon', 'Born between a dragon and a human, Draco cannot wield the full power of a dragon, but his might is still quite formidable.', 'Unit_10080_01.png', 'Unit_Illust_10080.png', '6_2.png', NULL, NULL, NULL),
(5, 'Neria', 2, 5, 'Hunter of the Red Moon', 'Neria is the leader of a secret sect called Red Moon, a group that seeks the root of the Curse of the Black Blood that spread throughout the world. After losing her kin to the cursed ones, she lives to eliminate the dark-blooded beings to the last of their kind.', 'Unit_10350_99_00.png', 'Unit_Illust_10350_03.png', '21-2.png', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hero_base_stats`
--

CREATE TABLE `hero_base_stats` (
  `id` bigint UNSIGNED NOT NULL,
  `hero_id` bigint UNSIGNED NOT NULL,
  `ATK` int NOT NULL DEFAULT '0',
  `Spell` int NOT NULL DEFAULT '0',
  `ATK_SPEED` decimal(5,2) NOT NULL DEFAULT '1.00',
  `MP` int NOT NULL DEFAULT '0',
  `HP` int NOT NULL DEFAULT '0',
  `Damage_Dealt` int NOT NULL DEFAULT '0',
  `Normal_Attack_Amplification` decimal(5,2) NOT NULL DEFAULT '1.00',
  `Skill_Amplification` decimal(5,2) NOT NULL DEFAULT '1.00',
  `Special_Damage` int NOT NULL DEFAULT '0',
  `Physical_CRIT_Damage` decimal(5,2) NOT NULL DEFAULT '1.50',
  `Spell_CRIT_Damage` decimal(5,2) NOT NULL DEFAULT '1.50',
  `Physical_CRIT_Chance` decimal(5,2) NOT NULL DEFAULT '0.05',
  `Spell_CRIT_Chance` decimal(5,2) NOT NULL DEFAULT '0.05',
  `Physical_DEF` int NOT NULL DEFAULT '0',
  `Spell_DEF` int NOT NULL DEFAULT '0',
  `Mighty_Block` int NOT NULL DEFAULT '0',
  `Damage_Taken` int NOT NULL DEFAULT '0',
  `EVA` decimal(5,2) NOT NULL DEFAULT '0.05',
  `Outgoing_Healing` int NOT NULL DEFAULT '0',
  `Guard` int NOT NULL DEFAULT '0',
  `Physical_HP_Drain` decimal(5,2) NOT NULL DEFAULT '0.00',
  `Spell_HP_Drain` decimal(5,2) NOT NULL DEFAULT '0.00',
  `Execution_Rate` decimal(5,2) NOT NULL DEFAULT '0.00',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `hero_base_stats`
--

INSERT INTO `hero_base_stats` (`id`, `hero_id`, `ATK`, `Spell`, `ATK_SPEED`, `MP`, `HP`, `Damage_Dealt`, `Normal_Attack_Amplification`, `Skill_Amplification`, `Special_Damage`, `Physical_CRIT_Damage`, `Spell_CRIT_Damage`, `Physical_CRIT_Chance`, `Spell_CRIT_Chance`, `Physical_DEF`, `Spell_DEF`, `Mighty_Block`, `Damage_Taken`, `EVA`, `Outgoing_Healing`, `Guard`, `Physical_HP_Drain`, `Spell_HP_Drain`, `Execution_Rate`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 40, 100, 0.80, 140, 350, 1, 0.00, 0.00, 1, 1.50, 1.50, 0.00, 0.00, 0, 0, 5, 1, 0.00, 1, 0, 0.00, 0.00, 0.00, NULL, NULL, NULL),
(2, 2, 60, 20, 0.60, 70, 750, 1, 0.00, 0.00, 1, 1.50, 1.50, 0.00, 0.00, 0, 0, 25, 1, 0.00, 1, 0, 0.00, 0.00, 0.00, NULL, NULL, NULL),
(3, 3, 90, 30, 1.20, 90, 450, 1, 0.00, 0.00, 1, 1.50, 1.50, 0.00, 0.00, 0, 0, 10, 1, 0.00, 1, 0, 0.00, 0.00, 0.00, NULL, NULL, NULL),
(4, 4, 80, 70, 0.90, 110, 550, 1, 0.00, 0.00, 1, 1.50, 1.50, 0.00, 0.00, 0, 0, 15, 1, 0.00, 1, 0, 0.00, 0.00, 0.00, NULL, NULL, NULL),
(5, 5, 100, 10, 1.10, 80, 400, 1, 0.00, 0.00, 1, 1.50, 1.50, 0.00, 0.00, 0, 0, 5, 1, 0.00, 1, 0, 0.00, 0.00, 0.00, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hero_skills`
--

CREATE TABLE `hero_skills` (
  `id` bigint UNSIGNED NOT NULL,
  `hero_id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `type` enum('passive','awakening','ultimate') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `hero_skills`
--

INSERT INTO `hero_skills` (`id`, `hero_id`, `name`, `description`, `type`, `icon`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'Lunar Aegis', '<Blessing of the Blue Moon> grants 1 Mighty Block to the target.', 'passive', NULL, NULL, NULL, NULL),
(2, 1, 'Moonlit Resilience', 'After the end of <Blessing of the Blue Moon>, buff remains for an additional 2 turns.', 'passive', NULL, NULL, NULL, NULL),
(3, 1, 'Swift Blessing', 'Luniare recovers 100% MP if the target\'s is after Luniare at the begining of the battle. +20% Movement Speed on the target of <Blessing of the Blue Moon>.', 'awakening', NULL, NULL, NULL, NULL),
(4, 1, 'Protection of the Moon', 'No longer grants Protection when <Blessing of the Blue Moon> is cast. +2 Mighty Blocks to the target of <Blessing of the Blue Moon>', 'awakening', NULL, NULL, NULL, NULL),
(5, 1, 'Blessing of the Blue Moon', 'Concentrates for 5 turns, granting 15/60/120/250+SP Protection to the linked target and giving 90/100/110/120% of ATK and Spell Power converted into the target hero\'s base stats.', 'ultimate', NULL, NULL, NULL, NULL),
(6, 2, 'Knight\'s Bulwark', '+50% For all obtained Protection.', 'passive', NULL, NULL, NULL, NULL),
(7, 2, 'Defiant Stand', ' -20 MP Cost of <Iron Will>.', 'passive', NULL, NULL, NULL, NULL),
(8, 2, 'Absolute Will', 'Obtains 2-8 Mighty Blocks when using <Iron Will>. (can\'t be stacked)', 'awakening', NULL, NULL, NULL, NULL),
(9, 2, 'Explosive Will', 'Consumes current Protection when using <Iron Will>. Upon consuming/depleting Protection, deals spell skill damage equal to consuming/depleting Protection + 50% of Spell power to all enemies', 'awakening', NULL, NULL, NULL, NULL),
(10, 2, 'Iron Will', 'Generates 30/120/250/700 + SP Protection upon herself with her willpower.', 'ultimate', NULL, NULL, NULL, NULL),
(11, 3, 'Valiant Strike', 'Recover 100% of MP at the start of the battle', 'passive', NULL, NULL, NULL, NULL),
(12, 3, 'Tactician\'s Edge', '+40% Spell Power', 'passive', NULL, NULL, NULL, NULL),
(13, 3, 'Wave Slash', '+20% final damage of <Crescent Slash> for each enemy hit by <Crescent Slash> (max +100%)', 'awakening', NULL, NULL, NULL, NULL),
(14, 3, 'Unleash Sword Aura', 'Emits aura with his sword that deals spell normal damage equal to 30% of Spell Power to enemies next to target on normal attacks', 'awakening', NULL, NULL, NULL, NULL),
(15, 3, 'Crescent Slash', 'Unleash a piercing aura with his sword, dealing 20/35/50/65+ SP damage to 3 enemies in front of him.', 'ultimate', NULL, NULL, NULL, NULL),
(16, 4, 'Drake\'s Flame', 'When all targets of <Flamebreath> are killed, MP is returned in proportion to the remaining skill damage count', 'passive', NULL, NULL, NULL, NULL),
(17, 4, 'Stormfang Slash', 'Drain +50% of the Spell Power damage as HP', 'passive', NULL, NULL, NULL, NULL),
(18, 4, 'Ignite', 'Gradually increases final damage of <Flamebreath> by 15% while target is on it for every turn (max 135%)', 'awakening', NULL, NULL, NULL, NULL),
(19, 4, 'Concentrated Flame', '-45 MP Cost and +70% Spell Power for <Flamebreath>. Total turn of <Flamebreath> is reduced to 4 and can\'t be stacked', 'awakening', NULL, NULL, NULL, NULL),
(20, 4, 'Flamebreath', 'Breathes out flame, dealing 10 + 60% SP damage to all enemies in front of him once for 10 turns.', 'ultimate', NULL, NULL, NULL, NULL),
(21, 5, 'Crimson Fang', '+1% final damage per 1% HP lost by target of <Annihilation Time> (max +60%)', 'passive', NULL, NULL, NULL, NULL),
(22, 5, 'Bloodseeker\'s Mark', '+1% final damage dealt by <Annihilation Time> for every 3% Attack Speed that exceeds 100% (max +50%)', 'passive', NULL, NULL, NULL, NULL),
(23, 5, ' Everlasting Night', '+1 attack count of <Annihilation Time> that is being cast when a target is killed by the skill (max 3)', 'awakening', NULL, NULL, NULL, NULL),
(24, 5, 'Shroud of Night', 'Hides for 2 round when using <Annihilation Time>, becoming untargetable to attacks for the duration', 'awakening', NULL, NULL, NULL, NULL),
(25, 5, 'Annihilation Time', 'For the next 4 rounds, shoots enhanced arrows that deal (450+SP/10)% of ATK. During <Annihilation Time>, Neria\'s Movement Speed is fixed to 100.', 'ultimate', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `inventory`
--

CREATE TABLE `inventory` (
  `user_id` bigint UNSIGNED NOT NULL,
  `item_id` bigint UNSIGNED NOT NULL,
  `quantity` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `inventory`
--

INSERT INTO `inventory` (`user_id`, `item_id`, `quantity`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 5, 1, NULL, NULL, NULL),
(1, 6, 3, NULL, NULL, NULL),
(1, 9, 2, NULL, NULL, NULL),
(2, 3, 1, NULL, NULL, NULL),
(2, 4, 1, NULL, NULL, NULL),
(2, 10, 5, NULL, NULL, NULL),
(3, 1, 6, NULL, NULL, NULL),
(3, 8, 2, NULL, NULL, NULL),
(3, 9, 1, NULL, NULL, NULL),
(4, 1, 8, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `item_effects`
--

CREATE TABLE `item_effects` (
  `id` bigint UNSIGNED NOT NULL,
  `item_id` bigint UNSIGNED NOT NULL,
  `stat_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `modifier_type` enum('flat','percent','special') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'flat',
  `value` decimal(6,2) NOT NULL,
  `note` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `item_effects`
--

INSERT INTO `item_effects` (`id`, `item_id`, `stat_name`, `modifier_type`, `value`, `note`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'MP', 'flat', 50.00, 'Restores 50 mana instantly upon consumption.', NULL, NULL, NULL),
(2, 1, 'HP', 'flat', 100.00, 'Heals 100 health over 10 seconds.', NULL, NULL, NULL),
(3, 4, 'ATK', 'percent', 0.15, 'Increases attack power by 15% for heroes like Neria.', NULL, NULL, NULL),
(4, 4, 'Execution_Rate', 'flat', 0.05, 'Grants a 5% chance to execute low-HP enemies.', NULL, NULL, NULL),
(5, 5, 'Special_Damage', 'flat', 20.00, 'Adds 20 fire damage to all attacks for heroes like Draco.', NULL, NULL, NULL),
(6, 5, 'Spell', 'percent', 0.20, 'Boosts spell power by 20%, stacking up to 60% with repeated casts.', NULL, NULL, NULL),
(7, 9, 'Mighty_Block', 'flat', 15.00, 'Increases block chance by 15 for tanks like Shelda.', NULL, NULL, NULL),
(8, 10, 'Skill_Amplification', 'percent', 0.25, 'Boosts skill damage by 25% for 30 seconds after consumption.', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `level_requirements`
--

CREATE TABLE `level_requirements` (
  `level` int NOT NULL,
  `xp_required` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `level_requirements`
--

INSERT INTO `level_requirements` (`level`, `xp_required`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 0, NULL, NULL, NULL),
(2, 10, NULL, NULL, NULL),
(3, 60, NULL, NULL, NULL),
(4, 160, NULL, NULL, NULL),
(5, 310, NULL, NULL, NULL),
(6, 510, NULL, NULL, NULL),
(7, 760, NULL, NULL, NULL),
(8, 1060, NULL, NULL, NULL),
(9, 1410, NULL, NULL, NULL),
(10, 1810, NULL, NULL, NULL),
(11, 2260, NULL, NULL, NULL),
(12, 2760, NULL, NULL, NULL),
(13, 3310, NULL, NULL, NULL),
(14, 3910, NULL, NULL, NULL),
(15, 4560, NULL, NULL, NULL),
(16, 5260, NULL, NULL, NULL),
(17, 6010, NULL, NULL, NULL),
(18, 6810, NULL, NULL, NULL),
(19, 7660, NULL, NULL, NULL),
(20, 8560, NULL, NULL, NULL),
(21, 9510, NULL, NULL, NULL),
(22, 10510, NULL, NULL, NULL),
(23, 11560, NULL, NULL, NULL),
(24, 12660, NULL, NULL, NULL),
(25, 13810, NULL, NULL, NULL),
(26, 15010, NULL, NULL, NULL),
(27, 16260, NULL, NULL, NULL),
(28, 17560, NULL, NULL, NULL),
(29, 18910, NULL, NULL, NULL),
(30, 20310, NULL, NULL, NULL),
(31, 21760, NULL, NULL, NULL),
(32, 23260, NULL, NULL, NULL),
(33, 24810, NULL, NULL, NULL),
(34, 26410, NULL, NULL, NULL),
(35, 28060, NULL, NULL, NULL),
(36, 29760, NULL, NULL, NULL),
(37, 31510, NULL, NULL, NULL),
(38, 33310, NULL, NULL, NULL),
(39, 35160, NULL, NULL, NULL),
(40, 37060, NULL, NULL, NULL),
(41, 39010, NULL, NULL, NULL),
(42, 41010, NULL, NULL, NULL),
(43, 43060, NULL, NULL, NULL),
(44, 45160, NULL, NULL, NULL),
(45, 47310, NULL, NULL, NULL),
(46, 49510, NULL, NULL, NULL),
(47, 51760, NULL, NULL, NULL),
(48, 54060, NULL, NULL, NULL),
(49, 56410, NULL, NULL, NULL),
(50, 58810, NULL, NULL, NULL),
(51, 61260, NULL, NULL, NULL),
(52, 63760, NULL, NULL, NULL),
(53, 66310, NULL, NULL, NULL),
(54, 68910, NULL, NULL, NULL),
(55, 71560, NULL, NULL, NULL),
(56, 74260, NULL, NULL, NULL),
(57, 77010, NULL, NULL, NULL),
(58, 79810, NULL, NULL, NULL),
(59, 82660, NULL, NULL, NULL),
(60, 85560, NULL, NULL, NULL),
(61, 88510, NULL, NULL, NULL),
(62, 91510, NULL, NULL, NULL),
(63, 94560, NULL, NULL, NULL),
(64, 97660, NULL, NULL, NULL),
(65, 100810, NULL, NULL, NULL),
(66, 104010, NULL, NULL, NULL),
(67, 107260, NULL, NULL, NULL),
(68, 110560, NULL, NULL, NULL),
(69, 113910, NULL, NULL, NULL),
(70, 117310, NULL, NULL, NULL),
(71, 120760, NULL, NULL, NULL),
(72, 124260, NULL, NULL, NULL),
(73, 127810, NULL, NULL, NULL),
(74, 131410, NULL, NULL, NULL),
(75, 135060, NULL, NULL, NULL),
(76, 138760, NULL, NULL, NULL),
(77, 142510, NULL, NULL, NULL),
(78, 146310, NULL, NULL, NULL),
(79, 150160, NULL, NULL, NULL),
(80, 154060, NULL, NULL, NULL),
(81, 158010, NULL, NULL, NULL),
(82, 162010, NULL, NULL, NULL),
(83, 166060, NULL, NULL, NULL),
(84, 170160, NULL, NULL, NULL),
(85, 174310, NULL, NULL, NULL),
(86, 178510, NULL, NULL, NULL),
(87, 182760, NULL, NULL, NULL),
(88, 187060, NULL, NULL, NULL),
(89, 191410, NULL, NULL, NULL),
(90, 195810, NULL, NULL, NULL),
(91, 200260, NULL, NULL, NULL),
(92, 204760, NULL, NULL, NULL),
(93, 209310, NULL, NULL, NULL),
(94, 213910, NULL, NULL, NULL),
(95, 218560, NULL, NULL, NULL),
(96, 223260, NULL, NULL, NULL),
(97, 228010, NULL, NULL, NULL),
(98, 232810, NULL, NULL, NULL),
(99, 237660, NULL, NULL, NULL),
(100, 242560, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `mails`
--

CREATE TABLE `mails` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `sender_email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `receiver_email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `received_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `mails`
--

INSERT INTO `mails` (`id`, `title`, `content`, `sender_email`, `receiver_email`, `received_at`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Chào mừng bạn đến với hệ thống!', 'Chúng tôi rất vui vì bạn đã tham gia.', 'admin@he-thong.com', 'user1@example.com', '2025-04-19 19:05:42', NULL, NULL, NULL),
(2, 'Xác nhận đăng ký', 'Vui lòng nhấn vào liên kết bên dưới để xác nhận đăng ký tài khoản của bạn.', 'noreply@he-thong.com', 'user2@example.com', '2025-04-19 19:05:42', NULL, NULL, NULL),
(3, 'Khuyến mãi đặc biệt', 'Giảm giá 50% cho tất cả sản phẩm trong hôm nay!', 'marketing@he-thong.com', 'user3@example.com', '2025-04-19 19:05:42', NULL, NULL, NULL),
(4, 'Thông báo bảo trì', 'Hệ thống sẽ bảo trì vào lúc 2 giờ sáng ngày mai.', 'admin@he-thong.com', 'user4@example.com', '2025-04-19 19:05:42', NULL, NULL, NULL),
(5, 'Hướng dẫn sử dụng', 'Dưới đây là hướng dẫn sử dụng chi tiết cho người mới bắt đầu...', 'support@he-thong.com', 'user5@example.com', '2025-04-19 19:05:42', NULL, NULL, NULL),
(6, 'test', 'test', 'test', '', '2025-05-18 01:52:35', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `messages`
--

CREATE TABLE `messages` (
  `id` bigint UNSIGNED NOT NULL,
  `sender_id` bigint UNSIGNED NOT NULL,
  `receiver_id` bigint UNSIGNED NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `messages`
--

INSERT INTO `messages` (`id`, `sender_id`, `receiver_id`, `content`, `sent_at`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 2, 'cxcxzc', '2025-05-01 19:17:10', NULL, NULL, NULL),
(2, 2, 1, 'xczxczxccdffdg', '2025-05-01 19:18:15', NULL, NULL, NULL),
(3, 1, 3, 'gffdg', '2025-05-01 19:18:45', NULL, NULL, NULL),
(4, 4, 1, 'fdfsdf', '2025-05-01 19:19:00', NULL, NULL, NULL),
(5, 3, 4, 'fdsfsdf', '2025-05-01 19:19:20', NULL, NULL, NULL),
(6, 2, 3, 'xin chao', '2025-05-01 19:19:40', NULL, NULL, NULL),
(7, 3, 2, 'chào nha', '2025-05-01 19:19:56', NULL, NULL, NULL),
(8, 5, 4, 'dsadsadas', '2025-05-25 01:24:03', NULL, NULL, NULL),
(9, 4, 5, 'dsdsad', '2025-05-25 01:24:11', NULL, NULL, NULL),
(10, 6, 4, 'dsadasd', '2025-05-25 01:25:40', NULL, NULL, NULL),
(11, 4, 6, 'sdsadsad123', '2025-05-25 01:25:50', NULL, NULL, NULL),
(12, 5, 6, 'dsadasdas', '2025-05-25 02:10:57', NULL, NULL, NULL),
(13, 6, 5, 'fdfdsfsdf', '2025-05-25 02:20:16', NULL, NULL, NULL),
(14, 1, 4, 'dsdasdasdas12312321312', '2025-05-25 02:36:43', NULL, NULL, NULL),
(15, 4, 1, 'sadsadasdasdasd', '2025-05-25 02:36:51', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2024_01_01_000001_create_regions_table', 1),
(2, '2024_01_01_000002_create_classes_table', 1),
(3, '2024_01_01_000003_create_users_table', 1),
(4, '2024_01_01_000004_create_heroes_table', 1),
(5, '2024_01_01_000005_create_hero_base_stats_table', 1),
(6, '2024_01_01_000006_create_hero_skills_table', 1),
(7, '2024_01_01_000007_create_enemies_table', 1),
(8, '2024_01_01_000008_create_enemy_base_stats_table', 1),
(9, '2024_01_01_000009_create_enemy_skills_table', 1),
(10, '2024_01_01_000010_create_sundries_table', 1),
(11, '2024_01_01_000011_create_item_effects_table', 1),
(12, '2024_01_01_000012_create_inventory_table', 1),
(13, '2024_01_01_000013_create_user_heroes_table', 1),
(14, '2024_01_01_000014_create_user_hero_stats_table', 1),
(15, '2024_01_01_000015_create_user_hero_accessories_table', 1),
(16, '2024_01_01_000016_create_user_hero_legacies_table', 1),
(17, '2024_01_01_000017_create_teams_table', 1),
(18, '2024_01_01_000018_create_team_relics_table', 1),
(19, '2024_01_01_000019_create_friends_table', 1),
(20, '2024_01_01_000020_create_messages_table', 1),
(21, '2024_01_01_000021_create_mails_table', 1),
(22, '2024_01_01_000022_create_quests_table', 1),
(23, '2024_01_01_000023_create_level_requirements_table', 1),
(24, '2024_01_01_000024_create_xp_amounts_table', 1),
(25, '2024_01_01_000025_create_cache_table', 1),
(26, '2024_01_01_000026_create_settings_and_user_settings_tables', 1),
(27, '2024_12_01_000001_add_oauth_to_users_table', 1),
(28, '2024_01_01_000027_create_effects_tables', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `quests`
--

CREATE TABLE `quests` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `status` enum('Pending','Completed') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Pending',
  `type` enum('daily','weekly') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `quests`
--

INSERT INTO `quests` (`id`, `title`, `description`, `status`, `type`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Đăng nhập mỗi ngày', 'Đăng nhập vào game ít nhất 1 lần trong ngày', 'Completed', 'daily', '2025-05-25 08:40:14', NULL, NULL),
(2, 'Hoàn thành 3 trận đấu', 'Chơi và hoàn thành 3 trận bất kỳ trong ngày', 'Pending', 'daily', '2025-05-25 08:40:14', NULL, NULL),
(3, 'Thu thập 5 vật phẩm', 'Nhặt đủ 5 vật phẩm trong bản đồ bất kỳ', 'Pending', 'daily', '2025-05-25 08:40:14', NULL, NULL),
(4, 'Giúp đỡ 1 người chơi', 'Gửi quà hoặc hỗ trợ người chơi khác 1 lần', 'Pending', 'daily', '2025-05-25 08:40:14', NULL, NULL),
(5, 'Đăng nhập 5 ngày liên tiếp', 'Mỗi ngày đăng nhập, tổng cộng 5 ngày trong tuần', 'Pending', 'weekly', '2025-05-25 08:40:14', NULL, NULL),
(6, 'Thắng 10 trận đấu', 'Chiến thắng tổng cộng 10 trận trong tuần', 'Pending', 'weekly', '2025-05-25 08:40:14', NULL, NULL),
(7, 'Nâng cấp vật phẩm 3 lần', 'Sử dụng hệ thống nâng cấp để nâng cấp vật phẩm 3 lần', 'Pending', 'weekly', '2025-05-25 08:40:14', NULL, NULL),
(8, 'Tham gia chế độ đấu hạng', 'Tham gia ít nhất 3 trận trong chế độ đấu hạng', 'Pending', 'weekly', '2025-05-25 08:40:14', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `regions`
--

CREATE TABLE `regions` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `icon` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `regions`
--

INSERT INTO `regions` (`id`, `name`, `description`, `icon`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'South', 'A sun-drenched realm of vibrant landscapes, the South pulses with fiery passion and untamed beauty. Its sprawling deserts and lush jungles teem with life, challenging adventurers with trials of endurance and discovery.', NULL, NULL, NULL, NULL),
(2, 'North', 'A frost-kissed expanse of rugged majesty, the North stands resolute under towering peaks and endless skies. Its icy winds carry tales of ancient heroes, beckoning the brave to carve their own legends.', NULL, NULL, NULL, NULL),
(3, 'East', 'A land of dawn\'s first light, the East shimmers with mystic allure and boundless opportunity. Its serene valleys and windswept cliffs hide secrets of forgotten lore, awaiting those bold enough to seek them.', NULL, NULL, NULL, NULL),
(4, 'West', 'A frontier of untamed horizons, the West roars with the spirit of exploration and conquest. Its golden plains and stormy coasts promise riches and peril, forging heroes in the crucible of adventure.', NULL, NULL, NULL, NULL),
(5, 'Central', 'The beating heart of the world, the Central region thrives with harmony and unrelenting vitality. Its rolling hills and radiant cities unite diverse cultures, offering a crucible for epic tales and grand destinies.', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `settings`
--

CREATE TABLE `settings` (
  `id` bigint UNSIGNED NOT NULL,
  `key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `settings`
--

INSERT INTO `settings` (`id`, `key`, `value`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'language', 'en', NULL, NULL, NULL),
(2, 'notifications_enabled', '1', NULL, NULL, NULL),
(3, 'theme', 'dark', NULL, NULL, NULL),
(4, 'email_marketing', '0', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sundries`
--

CREATE TABLE `sundries` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` enum('consumable','armor','weapon','ammo','food','ingredient','material','relic','accessory','legacy','currency') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `icon` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sundries`
--

INSERT INTO `sundries` (`id`, `name`, `type`, `description`, `icon`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Lunar Elixir', 'consumable', 'A shimmering potion infused with the North\'s Blue Moon essence, restoring mana and vitality to weary heroes like Luniare, who draw strength from its celestial glow.', NULL, NULL, NULL, NULL),
(2, 'Starforged Plate', 'armor', 'Forged in the Central region\'s ancient smithies, this radiant armor bolsters the resilience of warriors like Shelda, deflecting blows with unyielding might.', NULL, NULL, NULL, NULL),
(3, 'Dawnblade', 'weapon', 'A masterfully crafted sword from the Central region, its edge gleams with the light of dawn, wielded by heroes like Evan to carve paths through enemy ranks.', NULL, NULL, NULL, NULL),
(4, 'Red Moon Talisman', 'accessory', 'A crimson amulet pulsing with the North\'s vengeful spirit, enhancing the precision of assassins like Neria as they hunt the cursed under the Red Moon\'s gaze.', NULL, NULL, NULL, NULL),
(5, 'Drake\'s Embercore', 'relic', 'A smoldering gem from the West\'s volcanic depths, imbued with draconic fire, granting heroes like Draco the power to unleash searing elemental fury.', NULL, NULL, NULL, NULL),
(6, 'Moonlit Thread', 'material', 'Gossamer strands woven from the North\'s lunar mists, used by mystics like Luniare to craft enchanted garments that shimmer with arcane protection.', NULL, NULL, NULL, NULL),
(7, 'Sacred Reliquary', 'legacy', 'An ancient artifact from the Central region, said to hold the valor of fallen knights, empowering heroes like Evan with the strength of their forebears.', NULL, NULL, NULL, NULL),
(8, 'Viper\'s Fang', 'weapon', 'A sleek dagger forged in the North\'s shadows, its venomous edge favored by Nerias for silent strikes against the cursed, leaving no trace.', NULL, NULL, NULL, NULL),
(9, 'Guardian\'s Crest', 'accessory', 'A sturdy emblem etched with the Central region\'s sigils, worn by tanks like Shelda to bolster their resolve and shield allies from harm.', NULL, NULL, NULL, NULL),
(10, 'Astral Shard', 'consumable', 'A crystalline fragment from the North\'s starry skies, consumed by mystics like Luniare to briefly amplify their spellcasting with cosmic radiance.', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `teams`
--

CREATE TABLE `teams` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slot1` bigint UNSIGNED DEFAULT NULL,
  `slot2` bigint UNSIGNED DEFAULT NULL,
  `slot3` bigint UNSIGNED DEFAULT NULL,
  `slot4` bigint UNSIGNED DEFAULT NULL,
  `slot5` bigint UNSIGNED DEFAULT NULL,
  `slot6` bigint UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `teams`
--

INSERT INTO `teams` (`id`, `user_id`, `name`, `slot1`, `slot2`, `slot3`, `slot4`, `slot5`, `slot6`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'Moonlit Vanguard', 1, 2, 3, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 1, 'Drake\'s Fury', 3, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 2, 'Blade of Shadows', 4, 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 3, 'Crimson Bastion', 7, 6, 8, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `team_relics`
--

CREATE TABLE `team_relics` (
  `team_id` bigint UNSIGNED NOT NULL,
  `relic_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `team_relics`
--

INSERT INTO `team_relics` (`team_id`, `relic_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 5, NULL, NULL, NULL),
(2, 5, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `google_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('user','admin') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `icon` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `email`, `email_verified_at`, `password`, `google_id`, `provider`, `username`, `role`, `icon`, `avatar`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'alice@example.com', NULL, '$2y$12$UUuZrrUGHUCAx3huaOiFSunO3xcsS9AV0BiOE9DexFwDeanvR3vGG', NULL, NULL, 'alice_wonder', 'user', NULL, NULL, NULL, NULL, NULL),
(2, 'admin@email.com', NULL, '$2y$10$TTyBX9wXkCgrJRIY/8.1IOBSdwMlhbBpt5ZL8LJAS75aWHaLszQOW', NULL, NULL, 'bob_builder', 'user', NULL, NULL, NULL, NULL, NULL),
(3, 'charlie@example.com', NULL, '$2y$12$zf3rW6Azo4N5u8/wxa2r4OGU7IHlKg9ChO2MNsAHHKkD0hKIEjZyK', NULL, NULL, 'charlie_chap', 'user', NULL, NULL, NULL, NULL, NULL),
(4, 'user@gmail.com', NULL, '$2y$12$W8UJ48hHzmhQu0LcRLM/9uQwnKAqLkW/2JGvkQ4MkbrjfhtnM9UT6', NULL, NULL, 'username 1', 'user', NULL, NULL, NULL, NULL, NULL),
(5, 'admin@gmail.com', NULL, '$2y$12$GbJFtD80OV/HDGok4Plwj.aPmio3NIsZqap4vX0hRyV1hfolailZ6', NULL, NULL, 'admin', 'admin', NULL, NULL, NULL, NULL, NULL),
(6, 'ng@gmail.com', NULL, '$2y$10$Naq6e32jtsUnRe/5ESjwfOiYESep8Wbmk9sMY4csJwXv3M8Q76XZe', NULL, NULL, 'ssksk', 'user', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_heroes`
--

CREATE TABLE `user_heroes` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `hero_id` bigint UNSIGNED NOT NULL,
  `level` int NOT NULL DEFAULT '1',
  `xp` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user_heroes`
--

INSERT INTO `user_heroes` (`id`, `user_id`, `hero_id`, `level`, `xp`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 4, 1, 3, 10, NULL, NULL, NULL),
(2, 4, 2, 2, 10, NULL, NULL, NULL),
(3, 4, 4, 4, 90, NULL, NULL, NULL),
(4, 4, 3, 1, 0, NULL, NULL, NULL),
(5, 4, 5, 2, 0, NULL, NULL, NULL),
(6, 2, 1, 2, 0, NULL, NULL, NULL),
(7, 2, 2, 3, 0, NULL, NULL, NULL),
(8, 2, 3, 1, 0, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_hero_accessories`
--

CREATE TABLE `user_hero_accessories` (
  `user_hero_id` bigint UNSIGNED NOT NULL,
  `accessory_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user_hero_accessories`
--

INSERT INTO `user_hero_accessories` (`user_hero_id`, `accessory_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(2, 4, NULL, NULL, NULL),
(2, 9, NULL, NULL, NULL),
(5, 4, NULL, NULL, NULL),
(7, 9, NULL, NULL, NULL),
(8, 4, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_hero_legacies`
--

CREATE TABLE `user_hero_legacies` (
  `user_hero_id` bigint UNSIGNED NOT NULL,
  `legacy_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user_hero_legacies`
--

INSERT INTO `user_hero_legacies` (`user_hero_id`, `legacy_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 7, NULL, NULL, NULL),
(2, 7, NULL, NULL, NULL),
(3, 7, NULL, NULL, NULL),
(4, 7, NULL, NULL, NULL),
(5, 7, NULL, NULL, NULL),
(6, 7, NULL, NULL, NULL),
(7, 7, NULL, NULL, NULL),
(8, 7, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_hero_stats`
--

CREATE TABLE `user_hero_stats` (
  `id` bigint UNSIGNED NOT NULL,
  `user_hero_id` bigint UNSIGNED NOT NULL,
  `ATK` int NOT NULL DEFAULT '0',
  `Spell` int NOT NULL DEFAULT '0',
  `ATK_SPEED` decimal(5,2) NOT NULL DEFAULT '1.00',
  `MP` int NOT NULL DEFAULT '0',
  `HP` int NOT NULL DEFAULT '0',
  `Damage_Dealt` int NOT NULL DEFAULT '0',
  `Normal_Attack_Amplification` decimal(5,2) NOT NULL DEFAULT '1.00',
  `Skill_Amplification` decimal(5,2) NOT NULL DEFAULT '1.00',
  `Special_Damage` int NOT NULL DEFAULT '0',
  `Physical_CRIT_Damage` decimal(5,2) NOT NULL DEFAULT '1.50',
  `Spell_CRIT_Damage` decimal(5,2) NOT NULL DEFAULT '1.50',
  `Physical_CRIT_Chance` decimal(5,2) NOT NULL DEFAULT '0.05',
  `Spell_CRIT_Chance` decimal(5,2) NOT NULL DEFAULT '0.05',
  `Physical_DEF` int NOT NULL DEFAULT '0',
  `Spell_DEF` int NOT NULL DEFAULT '0',
  `Mighty_Block` int NOT NULL DEFAULT '0',
  `Damage_Taken` int NOT NULL DEFAULT '0',
  `EVA` decimal(5,2) NOT NULL DEFAULT '0.05',
  `Outgoing_Healing` int NOT NULL DEFAULT '0',
  `Guard` int NOT NULL DEFAULT '0',
  `Physical_HP_Drain` decimal(5,2) NOT NULL DEFAULT '0.00',
  `Spell_HP_Drain` decimal(5,2) NOT NULL DEFAULT '0.00',
  `Execution_Rate` decimal(5,2) NOT NULL DEFAULT '0.00',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user_hero_stats`
--

INSERT INTO `user_hero_stats` (`id`, `user_hero_id`, `ATK`, `Spell`, `ATK_SPEED`, `MP`, `HP`, `Damage_Dealt`, `Normal_Attack_Amplification`, `Skill_Amplification`, `Special_Damage`, `Physical_CRIT_Damage`, `Spell_CRIT_Damage`, `Physical_CRIT_Chance`, `Spell_CRIT_Chance`, `Physical_DEF`, `Spell_DEF`, `Mighty_Block`, `Damage_Taken`, `EVA`, `Outgoing_Healing`, `Guard`, `Physical_HP_Drain`, `Spell_HP_Drain`, `Execution_Rate`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 40, 100, 0.80, 140, 350, 1, 0.00, 0.00, 1, 1.50, 1.50, 0.00, 0.00, 0, 0, 5, 1, 0.00, 1, 0, 0.00, 0.00, 0.00, NULL, NULL, NULL),
(2, 2, 60, 20, 0.60, 70, 750, 1, 0.00, 0.00, 1, 1.50, 1.50, 0.00, 0.00, 0, 0, 25, 1, 0.00, 1, 0, 0.00, 0.00, 0.00, NULL, NULL, NULL),
(3, 3, 90, 30, 1.20, 90, 450, 1, 0.00, 0.00, 1, 1.50, 1.50, 0.00, 0.00, 0, 0, 10, 1, 0.00, 1, 0, 0.00, 0.00, 0.00, NULL, NULL, NULL),
(4, 4, 80, 70, 0.90, 110, 550, 1, 0.00, 0.00, 1, 1.50, 1.50, 0.00, 0.00, 0, 0, 15, 1, 0.00, 1, 0, 0.00, 0.00, 0.00, NULL, NULL, NULL),
(5, 5, 100, 10, 1.10, 80, 400, 1, 0.00, 0.00, 1, 1.50, 1.50, 0.00, 0.00, 0, 0, 5, 1, 0.00, 1, 0, 0.00, 0.00, 0.00, NULL, NULL, NULL),
(6, 6, 40, 100, 0.80, 140, 350, 1, 0.00, 0.00, 1, 1.50, 1.50, 0.00, 0.00, 0, 0, 5, 1, 0.00, 1, 0, 0.00, 0.00, 0.00, NULL, NULL, NULL),
(7, 7, 60, 20, 0.60, 70, 750, 1, 0.00, 0.00, 1, 1.50, 1.50, 0.00, 0.00, 0, 0, 25, 1, 0.00, 1, 0, 0.00, 0.00, 0.00, NULL, NULL, NULL),
(8, 8, 90, 30, 1.20, 90, 450, 1, 0.00, 0.00, 1, 1.50, 1.50, 0.00, 0.00, 0, 0, 10, 1, 0.00, 1, 0, 0.00, 0.00, 0.00, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_settings`
--

CREATE TABLE `user_settings` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `setting_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user_settings`
--

INSERT INTO `user_settings` (`id`, `user_id`, `setting_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 1, NULL, NULL, NULL),
(2, 1, 2, NULL, NULL, NULL),
(3, 2, 1, NULL, NULL, NULL),
(4, 2, 3, NULL, NULL, NULL),
(5, 3, 1, NULL, NULL, NULL),
(6, 3, 2, NULL, NULL, NULL),
(7, 3, 4, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `xp_amounts`
--

CREATE TABLE `xp_amounts` (
  `id` bigint UNSIGNED NOT NULL,
  `type` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `xp_amounts`
--

INSERT INTO `xp_amounts` (`id`, `type`, `value`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'win_match', 100, NULL, NULL, NULL),
(2, 'xp_bottle', 5, NULL, NULL, NULL),
(3, 'summon_duplicate', 25, NULL, NULL, NULL),
(4, 'complete_quest', 50, NULL, NULL, NULL),
(5, 'defeat_boss', 200, NULL, NULL, NULL),
(6, 'daily_login', 10, NULL, NULL, NULL),
(7, 'friend_support', 15, NULL, NULL, NULL),
(8, 'upgrade_hero', 30, NULL, NULL, NULL),
(9, 'collect_item', 8, NULL, NULL, NULL),
(10, 'participate_event', 40, NULL, NULL, NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Chỉ mục cho bảng `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Chỉ mục cho bảng `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `conditions`
--
ALTER TABLE `conditions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `conditions_effect_id_foreign` (`effect_id`);

--
-- Chỉ mục cho bảng `effects`
--
ALTER TABLE `effects`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `effects_params`
--
ALTER TABLE `effects_params`
  ADD PRIMARY KEY (`id`),
  ADD KEY `effects_params_effect_id_foreign` (`effect_id`);

--
-- Chỉ mục cho bảng `enemies`
--
ALTER TABLE `enemies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `enemies_region_id_foreign` (`region_id`),
  ADD KEY `enemies_class_id_foreign` (`class_id`);

--
-- Chỉ mục cho bảng `enemy_base_stats`
--
ALTER TABLE `enemy_base_stats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `enemy_base_stats_enemy_id_foreign` (`enemy_id`);

--
-- Chỉ mục cho bảng `enemy_skills`
--
ALTER TABLE `enemy_skills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `enemy_skills_enemy_id_foreign` (`enemy_id`);

--
-- Chỉ mục cho bảng `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`id`),
  ADD KEY `friends_user_id_foreign` (`user_id`),
  ADD KEY `friends_friend_id_foreign` (`friend_id`);

--
-- Chỉ mục cho bảng `heroes`
--
ALTER TABLE `heroes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `heroes_region_id_foreign` (`region_id`),
  ADD KEY `heroes_class_id_foreign` (`class_id`);

--
-- Chỉ mục cho bảng `hero_base_stats`
--
ALTER TABLE `hero_base_stats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hero_base_stats_hero_id_foreign` (`hero_id`);

--
-- Chỉ mục cho bảng `hero_skills`
--
ALTER TABLE `hero_skills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hero_skills_hero_id_foreign` (`hero_id`);

--
-- Chỉ mục cho bảng `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`user_id`,`item_id`),
  ADD KEY `inventory_item_id_foreign` (`item_id`);

--
-- Chỉ mục cho bảng `item_effects`
--
ALTER TABLE `item_effects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_effects_item_id_foreign` (`item_id`);

--
-- Chỉ mục cho bảng `level_requirements`
--
ALTER TABLE `level_requirements`
  ADD PRIMARY KEY (`level`);

--
-- Chỉ mục cho bảng `mails`
--
ALTER TABLE `mails`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `messages_sender_id_foreign` (`sender_id`),
  ADD KEY `messages_receiver_id_foreign` (`receiver_id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `quests`
--
ALTER TABLE `quests`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `regions`
--
ALTER TABLE `regions`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `settings_key_unique` (`key`);

--
-- Chỉ mục cho bảng `sundries`
--
ALTER TABLE `sundries`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teams_user_id_foreign` (`user_id`),
  ADD KEY `teams_slot1_foreign` (`slot1`),
  ADD KEY `teams_slot2_foreign` (`slot2`),
  ADD KEY `teams_slot3_foreign` (`slot3`),
  ADD KEY `teams_slot4_foreign` (`slot4`),
  ADD KEY `teams_slot5_foreign` (`slot5`),
  ADD KEY `teams_slot6_foreign` (`slot6`);

--
-- Chỉ mục cho bảng `team_relics`
--
ALTER TABLE `team_relics`
  ADD PRIMARY KEY (`team_id`,`relic_id`),
  ADD KEY `team_relics_relic_id_foreign` (`relic_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_google_id_unique` (`google_id`);

--
-- Chỉ mục cho bảng `user_heroes`
--
ALTER TABLE `user_heroes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_heroes_user_id_foreign` (`user_id`),
  ADD KEY `user_heroes_hero_id_foreign` (`hero_id`);

--
-- Chỉ mục cho bảng `user_hero_accessories`
--
ALTER TABLE `user_hero_accessories`
  ADD PRIMARY KEY (`user_hero_id`,`accessory_id`),
  ADD KEY `user_hero_accessories_accessory_id_foreign` (`accessory_id`);

--
-- Chỉ mục cho bảng `user_hero_legacies`
--
ALTER TABLE `user_hero_legacies`
  ADD PRIMARY KEY (`user_hero_id`,`legacy_id`),
  ADD KEY `user_hero_legacies_legacy_id_foreign` (`legacy_id`);

--
-- Chỉ mục cho bảng `user_hero_stats`
--
ALTER TABLE `user_hero_stats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_hero_stats_user_hero_id_foreign` (`user_hero_id`);

--
-- Chỉ mục cho bảng `user_settings`
--
ALTER TABLE `user_settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_settings_user_id_setting_id_unique` (`user_id`,`setting_id`),
  ADD KEY `user_settings_setting_id_foreign` (`setting_id`);

--
-- Chỉ mục cho bảng `xp_amounts`
--
ALTER TABLE `xp_amounts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `classes`
--
ALTER TABLE `classes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `conditions`
--
ALTER TABLE `conditions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT cho bảng `effects`
--
ALTER TABLE `effects`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `effects_params`
--
ALTER TABLE `effects_params`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;

--
-- AUTO_INCREMENT cho bảng `enemies`
--
ALTER TABLE `enemies`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `enemy_base_stats`
--
ALTER TABLE `enemy_base_stats`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `enemy_skills`
--
ALTER TABLE `enemy_skills`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `friends`
--
ALTER TABLE `friends`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `heroes`
--
ALTER TABLE `heroes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `hero_base_stats`
--
ALTER TABLE `hero_base_stats`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `hero_skills`
--
ALTER TABLE `hero_skills`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `item_effects`
--
ALTER TABLE `item_effects`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `mails`
--
ALTER TABLE `mails`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `messages`
--
ALTER TABLE `messages`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT cho bảng `quests`
--
ALTER TABLE `quests`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `regions`
--
ALTER TABLE `regions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `sundries`
--
ALTER TABLE `sundries`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `teams`
--
ALTER TABLE `teams`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `user_heroes`
--
ALTER TABLE `user_heroes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `user_hero_stats`
--
ALTER TABLE `user_hero_stats`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `user_settings`
--
ALTER TABLE `user_settings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `xp_amounts`
--
ALTER TABLE `xp_amounts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ràng buộc đối với các bảng kết xuất
--

--
-- Ràng buộc cho bảng `conditions`
--
ALTER TABLE `conditions`
  ADD CONSTRAINT `conditions_effect_id_foreign` FOREIGN KEY (`effect_id`) REFERENCES `effects` (`id`) ON DELETE CASCADE;

--
-- Ràng buộc cho bảng `effects_params`
--
ALTER TABLE `effects_params`
  ADD CONSTRAINT `effects_params_effect_id_foreign` FOREIGN KEY (`effect_id`) REFERENCES `effects` (`id`) ON DELETE CASCADE;

--
-- Ràng buộc cho bảng `enemies`
--
ALTER TABLE `enemies`
  ADD CONSTRAINT `enemies_class_id_foreign` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `enemies_region_id_foreign` FOREIGN KEY (`region_id`) REFERENCES `regions` (`id`) ON DELETE SET NULL;

--
-- Ràng buộc cho bảng `enemy_base_stats`
--
ALTER TABLE `enemy_base_stats`
  ADD CONSTRAINT `enemy_base_stats_enemy_id_foreign` FOREIGN KEY (`enemy_id`) REFERENCES `enemies` (`id`) ON DELETE CASCADE;

--
-- Ràng buộc cho bảng `enemy_skills`
--
ALTER TABLE `enemy_skills`
  ADD CONSTRAINT `enemy_skills_enemy_id_foreign` FOREIGN KEY (`enemy_id`) REFERENCES `enemies` (`id`) ON DELETE CASCADE;

--
-- Ràng buộc cho bảng `friends`
--
ALTER TABLE `friends`
  ADD CONSTRAINT `friends_friend_id_foreign` FOREIGN KEY (`friend_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `friends_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ràng buộc cho bảng `heroes`
--
ALTER TABLE `heroes`
  ADD CONSTRAINT `heroes_class_id_foreign` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `heroes_region_id_foreign` FOREIGN KEY (`region_id`) REFERENCES `regions` (`id`) ON DELETE SET NULL;

--
-- Ràng buộc cho bảng `hero_base_stats`
--
ALTER TABLE `hero_base_stats`
  ADD CONSTRAINT `hero_base_stats_hero_id_foreign` FOREIGN KEY (`hero_id`) REFERENCES `heroes` (`id`) ON DELETE CASCADE;

--
-- Ràng buộc cho bảng `hero_skills`
--
ALTER TABLE `hero_skills`
  ADD CONSTRAINT `hero_skills_hero_id_foreign` FOREIGN KEY (`hero_id`) REFERENCES `heroes` (`id`) ON DELETE CASCADE;

--
-- Ràng buộc cho bảng `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `inventory_item_id_foreign` FOREIGN KEY (`item_id`) REFERENCES `sundries` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `inventory_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ràng buộc cho bảng `item_effects`
--
ALTER TABLE `item_effects`
  ADD CONSTRAINT `item_effects_item_id_foreign` FOREIGN KEY (`item_id`) REFERENCES `sundries` (`id`) ON DELETE CASCADE;

--
-- Ràng buộc cho bảng `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_receiver_id_foreign` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `messages_sender_id_foreign` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ràng buộc cho bảng `teams`
--
ALTER TABLE `teams`
  ADD CONSTRAINT `teams_slot1_foreign` FOREIGN KEY (`slot1`) REFERENCES `user_heroes` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `teams_slot2_foreign` FOREIGN KEY (`slot2`) REFERENCES `user_heroes` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `teams_slot3_foreign` FOREIGN KEY (`slot3`) REFERENCES `user_heroes` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `teams_slot4_foreign` FOREIGN KEY (`slot4`) REFERENCES `user_heroes` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `teams_slot5_foreign` FOREIGN KEY (`slot5`) REFERENCES `user_heroes` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `teams_slot6_foreign` FOREIGN KEY (`slot6`) REFERENCES `user_heroes` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `teams_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ràng buộc cho bảng `team_relics`
--
ALTER TABLE `team_relics`
  ADD CONSTRAINT `team_relics_relic_id_foreign` FOREIGN KEY (`relic_id`) REFERENCES `sundries` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `team_relics_team_id_foreign` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`) ON DELETE CASCADE;

--
-- Ràng buộc cho bảng `user_heroes`
--
ALTER TABLE `user_heroes`
  ADD CONSTRAINT `user_heroes_hero_id_foreign` FOREIGN KEY (`hero_id`) REFERENCES `heroes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_heroes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ràng buộc cho bảng `user_hero_accessories`
--
ALTER TABLE `user_hero_accessories`
  ADD CONSTRAINT `user_hero_accessories_accessory_id_foreign` FOREIGN KEY (`accessory_id`) REFERENCES `sundries` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_hero_accessories_user_hero_id_foreign` FOREIGN KEY (`user_hero_id`) REFERENCES `user_heroes` (`id`) ON DELETE CASCADE;

--
-- Ràng buộc cho bảng `user_hero_legacies`
--
ALTER TABLE `user_hero_legacies`
  ADD CONSTRAINT `user_hero_legacies_legacy_id_foreign` FOREIGN KEY (`legacy_id`) REFERENCES `sundries` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_hero_legacies_user_hero_id_foreign` FOREIGN KEY (`user_hero_id`) REFERENCES `user_heroes` (`id`) ON DELETE CASCADE;

--
-- Ràng buộc cho bảng `user_hero_stats`
--
ALTER TABLE `user_hero_stats`
  ADD CONSTRAINT `user_hero_stats_user_hero_id_foreign` FOREIGN KEY (`user_hero_id`) REFERENCES `user_heroes` (`id`) ON DELETE CASCADE;

--
-- Ràng buộc cho bảng `user_settings`
--
ALTER TABLE `user_settings`
  ADD CONSTRAINT `user_settings_setting_id_foreign` FOREIGN KEY (`setting_id`) REFERENCES `settings` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_settings_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
