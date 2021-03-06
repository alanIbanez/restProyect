CREATE DATABASE [Restaurante2]
GO
USE [Restaurante2]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 27/9/2021 20:51:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Detalle]    Script Date: 27/9/2021 20:51:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Detalle](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idOrden] [int] NOT NULL,
	[idProducto] [int] NOT NULL,
	[cantidad] [int] NOT NULL,
	[subTotal] [int] NOT NULL,
 CONSTRAINT [PK_Detalle] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orden]    Script Date: 27/9/2021 20:51:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orden](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[fecha] [varchar](10) NULL,
	[nombre] [varchar](50) NULL,
	[total] [int] NULL,
 CONSTRAINT [PK_Orden] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Plato]    Script Date: 27/9/2021 20:51:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Plato](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](20) NOT NULL,
	[Costo] [int] NOT NULL,
	[Estado] [int] NOT NULL,
 CONSTRAINT [PK_Plato] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210926223853_initialMigrate', N'5.0.10')
GO
SET IDENTITY_INSERT [dbo].[Detalle] ON 

INSERT [dbo].[Detalle] ([id], [idOrden], [idProducto], [cantidad], [subTotal]) VALUES (24, 44, 1, 1, 11)
INSERT [dbo].[Detalle] ([id], [idOrden], [idProducto], [cantidad], [subTotal]) VALUES (25, 44, 2, 1, 6)
INSERT [dbo].[Detalle] ([id], [idOrden], [idProducto], [cantidad], [subTotal]) VALUES (26, 45, 1, 1, 11)
INSERT [dbo].[Detalle] ([id], [idOrden], [idProducto], [cantidad], [subTotal]) VALUES (27, 46, 1, 1, 11)
SET IDENTITY_INSERT [dbo].[Detalle] OFF
GO
SET IDENTITY_INSERT [dbo].[Orden] ON 

INSERT [dbo].[Orden] ([id], [fecha], [nombre], [total]) VALUES (44, N'27/9/2021', N'Alan', 30)
INSERT [dbo].[Orden] ([id], [fecha], [nombre], [total]) VALUES (45, N'27/9/2021', N'Joel', 30)
INSERT [dbo].[Orden] ([id], [fecha], [nombre], [total]) VALUES (46, N'27/9/2021', N'alan', 11)
SET IDENTITY_INSERT [dbo].[Orden] OFF
GO
SET IDENTITY_INSERT [dbo].[Plato] ON 

INSERT [dbo].[Plato] ([Id], [Nombre], [Costo], [Estado]) VALUES (1, N'Pollo', 11, 1)
INSERT [dbo].[Plato] ([Id], [Nombre], [Costo], [Estado]) VALUES (2, N'Kawi', 6, 1)
INSERT [dbo].[Plato] ([Id], [Nombre], [Costo], [Estado]) VALUES (3, N'Sopa de pollo', 5, 0)
INSERT [dbo].[Plato] ([Id], [Nombre], [Costo], [Estado]) VALUES (7, N'Chairo', 5, 0)
INSERT [dbo].[Plato] ([Id], [Nombre], [Costo], [Estado]) VALUES (8, N'Charque', 15, 0)
INSERT [dbo].[Plato] ([Id], [Nombre], [Costo], [Estado]) VALUES (9, N'Pailita', 10, 0)
SET IDENTITY_INSERT [dbo].[Plato] OFF
GO
