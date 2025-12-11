# 🎄 AI Gesture Controlled 3D Christmas Tree

一个基于 Web 前端技术的互动 3D 圣诞树。通过电脑摄像头识别手势，控制圣诞树的聚拢、散开、旋转以及查看悬浮照片。

[在这里插入你的演示截图或GIF]

## ✨ 特性 (Features)

- **AI 手势识别**: 使用 MediaPipe Hands 实现无接触交互。
- **3D 粒子系统**: 基于 Three.js 构建的数千个发光粒子和照片平面。
- **后期辉光特效**: 集成 UnrealBloomPass 实现电影级黑金辉光效果。
- **交互式动画**:
  - 🖐 **张开手掌**: 圣诞树炸裂散开，进入浏览模式。
  - ✊ **握拳/自然**: 粒子聚拢成树，自动旋转。
  - 👆 **手指悬停**: 在散开模式下，照片会自动吸附到屏幕中央放大。
- **自适应布局**: 适配不同尺寸的屏幕。

## 🛠️ 技术栈 (Tech Stack)

- **HTML5 / CSS3**
- **JavaScript (ES6+)**
- **[Three.js](https://threejs.org/)** - 3D 渲染引擎
- **[MediaPipe Hands](https://google.github.io/mediapipe/)** - 计算机视觉手势识别

## 🚀 如何运行 (How to Run)

由于浏览器的安全策略（CORS），本项目不能直接双击 `index.html` 打开，必须运行在本地服务器上。

### 方法 1: 使用 VS Code (推荐)
1. 安装 VS Code 插件 **Live Server**。
2. 右键点击 `index.html`，选择 **"Open with Live Server"**。

###  🛠️ VS Code 安装与 Live Server 配置指南
本项目使用了现代 Web 技术（MediaPipe AI + WebGL），为了确保摄像头权限和图片资源能正常加载，**不能直接双击打开 html 文件**，必须在本地服务器环境下运行。

本指南将教你如何使用 **Visual Studio Code (VS Code)** 和 **Live Server** 插件来零基础运行本项目。

---
## 第一步：下载并安装 VS Code

Visual Studio Code 是目前世界上最流行的免费代码编辑器。

1.  **访问官网**：打开浏览器访问 [https://code.visualstudio.com/](https://code.visualstudio.com/)。
2.  **下载**：点击首页巨大的蓝色按钮 **"Download for Windows"** (如果你是 Mac 用户则下载 Mac 版)。
3.  **安装**：
    * 双击下载的安装包。
    * 一路点击 "Next" (下一步)。
    * **建议勾选**：在安装过程中，建议勾选 "Add to PATH"（添加到环境变量）和 "Add 'Open with Code'..."（添加到右键菜单），这样以后打开项目会很方便。
    * 点击 "Install" 完成安装。

---

## 第二步：安装中文语言包 (可选)

如果你不习惯全英文界面，可以先汉化编辑器：

1.  打开 VS Code。
2.  点击左侧侧边栏最底部的 **扩展图标** (像玩俄罗斯方块一样的四个方块图标)，快捷键是 `Ctrl+Shift+X`。
3.  在搜索框输入：`Chinese`。
4.  找到第一个插件 **"Chinese (Simplified) (简体中文)"**，点击蓝色的 **Install** 按钮。
5.  安装完成后，右下角会提示重启软件，点击 **"Restart"**，界面就会变成中文。

---

## 第三步：安装 Live Server 插件 (关键)

这是运行本项目必须的插件，它能模拟一个本地服务器环境。

1.  再次点击左侧的 **扩展图标** (Extensions)。
2.  在搜索框输入：`Live Server`。
3.  找到由 **Ritwick Dey** 开发的插件 (通常是第一个，紫色图标)。
4.  点击 **安装 (Install)**。
5.  安装通常只需几秒钟，按钮变成 "Uninstall" 即代表安装成功。

---

## 第四步：打开并运行项目

现在环境已经准备好了，开始运行圣诞树：

1.  **打开项目文件夹**：
    * 在 VS Code 顶部菜单栏点击 **"文件 (File)"** -> **"打开文件夹 (Open Folder)"**。
    * 选择你存放代码的那个文件夹（例如 `Christmas-Tree-Web`），然后点击 "选择文件夹"。
    * *(注意：不要只打开 index.html 一个文件，必须打开整个文件夹！)*

2.  **启动服务器**：
    * 在左侧文件列表中，找到 `index.html` 文件。
    * **方法 A (推荐)**：在 `index.html` 文件名上点击 **鼠标右键**，在弹出的菜单中选择 **"Open with Live Server"**。
    * **方法 B**：打开 `index.html` 后，点击软件界面最右下角的 **"Go Live"** 按钮。

3.  **成功！**
    * 浏览器会自动弹出一个窗口（地址通常是 `http://127.0.0.1:5500/index.html`）。
    * 此时浏览器会请求 **摄像头权限**，点击 "允许"，圣诞树就会出现了！

---

## ❓ 常见问题

**Q: 为什么我右键没有 "Open with Live Server"？**
A: 请检查第三步是否安装成功，或者尝试重启一下 VS Code。此外，请确保你通过 "打开文件夹" 的方式打开了项目，而不是单独打开了一个文件。

**Q: 打开后屏幕是黑的？**
A: 
1. 按 F12 打开控制台，看是否有红色报错。
2. 确保你的图片放在了正确的 `assets` 文件夹内。
3. 确保你没有直接双击 html 文件打开，而是通过 Live Server 打

### 方法 2: 使用 Python
如果你安装了 Python，在项目根目录下运行终端命令：
```bash
# Python 3.x
python -m http.server 8000
## 自定义图片功能
下载整个文件之后点击assets文件夹，将想要展示的图片导入其中，并按规律进行命名如：1.png/1.jpg 以此类推。
找到index.html中的配置区 大概95行左右 找到const IMAGE_URLS ，将‘’中的图片名称进行更换再保存启动即可。

开的。
