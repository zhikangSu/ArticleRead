# ArticleRead

![ArticleRead promotional hero](assets/articleread-promo-hero.png)

ArticleRead 是一个面向论文精读的桌面应用。它把本地论文阅读、划词提问、批注、译文 PDF 生成和 Notion 归档放进同一个工作流里，适合需要高频阅读 arXiv / PDF 论文的研究者、工程师和学生。

当前公开预览版支持 Apple Silicon Mac 和 x64 Linux。

## 下载

- 最新版本：macOS 0.1.15；Linux 0.1.13（新版 Linux 安装包需在 Linux 机器单独构建）
- **从 0.1.13 起支持应用内内核更新**：兼容当前壳的后续功能更新可在设置页一键完成；涉及桌面壳的版本仍需下载完整安装包
- macOS：Apple Silicon / arm64，从 [v0.1.15](https://github.com/zhikangSu/ArticleRead/releases/tag/v0.1.15) 下载 `ArticleRead-0.1.15-arm64.dmg`
- Linux：x64，从 [v0.1.13](https://github.com/zhikangSu/ArticleRead/releases/tag/v0.1.13) 下载 `articleread-linux-desktop_0.1.13_amd64.deb` 或 `ArticleRead-0.1.13.AppImage`
- SHA256（0.1.15 macOS）：
  - DMG：`427cb34e705bf50f1c4466677c5b399a5cae37fa72dc6e927b71c84df119c31f`
  - macOS ZIP：`946406d90752b06755c4a7331f52d39fb50b5b91b00072f095e2f1ace45fd178`
- SHA256（0.1.13 Linux）：
  - AppImage：`2cceed0b90aab5b45fd3130ea52ed484f688cf29eaa662cfb10f3e5971470075`
  - deb：`acdb8c58d3c2822439190ef791cfd7bad21d40f014380b096610f351c62ca006`

> ⚠️ v0.1.10 存在启动即崩的缺陷（`buildAppMenu is not defined`），已下架为 pre-release，请勿使用。

### 0.1.15 亮点

- 新增首次启动引导，帮助新用户完成基础配置并快速理解核心操作
- 修复从论文阅读页返回论文库后标签页丢失的问题
- 修复批注保存后需额外点击才显示的问题；跨行高亮色板不再挡在正文行间
- 右侧问答面板支持拖到右缘收起，并可从右缘反向拖开；同时保留点击与双击操作
- 使用现代 macOS 图标资源管线，移除旧式透明 `.icns` 触发的灰色兼容底板，并放大图标主体
- 完整安装包已内置 paperq 2.20.2；0.1.14 用户也可以通过应用内更新获取本次内核功能

> 0.1.14 用户若只需要本次内核功能，可以直接使用应用内更新；若要获得修正后的 Dock 图标，需要安装一次 0.1.15 完整版。新下载的 0.1.15 已内置 2.20.2，不会再重复下载同一增量包。

### 0.1.14 亮点

- 多论文标签页：同一窗口可同时打开多篇论文，`+` 新建论文库页签并在当前页签打开所选论文
- 阅读交互升级：高亮即时生效、颜色记忆、取消高亮、重复处理、悬停回看与 `⌘Z / Ctrl+Z` 撤销
- 论文库升级：阅读中/已读完状态区分、卡片缩放、发表日期识别与手动编辑、统一导航与按钮细节
- 阅读界面升级：页数显示、沉浸式阅读、选区与高亮颜色一致，并修复缩放后的框选位置偏移
- 新版 App 图标素材；arXiv 元数据限流时自动节流并回退到官方论文页，不再直接留下错误卡片

> 0.1.14 包含桌面壳与图标更新，因此 0.1.13 用户需安装一次完整新版；之后兼容 0.1.14 壳的内核更新仍可在应用内完成。

### 0.1.13 亮点

- **应用内更新(内核热更新)**:启动静默检查,设置页一键下载 ~4MB 内核包重启生效;失败自动回退
- 拖选即自动翻译,浮层不再遮挡原文;顶栏一键标记「已读完」
- 修复同页高亮重复渲染;纯高亮选色立即上色

### 0.1.12 亮点

- PDF 应用内查找(⌘F / Ctrl+F):全文检索整本 PDF,命中计数、跳转定位、文中着色;原文/译文/分屏均可用
- 修复 AI 回答中 `\[...\]` / `\(...\)` 公式显示为裸文本的问题(存量消息同样生效)

### 0.1.10–0.1.11 亮点

- 划词工具条重做：解释 / 翻译 / 批注 / 提问 一键直达;翻译即划即得(Google 翻译,不耗 AI 额度)
- 高亮与提问分离：五色高亮由你主动圈选、悬停换色;提问位置用灰色短划线标记
- 研究者画像：AI 提炼你的研究方向与阅读习惯,注入每篇论文的问答,回答更贴合背景(全本机)
- 阅读回顾：AI 反思 + 阅读节奏 + 主题分布,支持 1/3/6/12 个月
- 修复应用内复制(Cmd+C);简报不再出现过程叙述;译文 PDF 缺宏包自动补装

## 你可以用它做什么

- 在本地阅读 PDF 论文，并围绕原文进行精读。
- 选中文本后快速提问、解释、记录手动批注。
- 为论文生成译文 PDF，方便中文语境下快速通读。
- 通过 Notion 集成把阅读成果归档到自己的知识库。
- 使用你本机已有的 Claude Code 或 Codex CLI 订阅能力，不把论文内容上传到额外的托管服务。

## 安装

macOS：

1. 从 Releases 下载 `ArticleRead-0.1.15-arm64.dmg`。
2. 打开 DMG，把 `ArticleRead.app` 拖到 `/Applications`。
3. 第一次打开时，如果 macOS 提示“文件已损坏”或“无法打开”，在终端运行：

```bash
sudo xattr -rd com.apple.quarantine "/Applications/ArticleRead.app"
```

然后重新打开 `ArticleRead.app`。

Linux：

```bash
sudo dpkg -i articleread-linux-desktop_0.1.13_amd64.deb
```

也可以直接运行 AppImage：

```bash
chmod +x ArticleRead-0.1.13.AppImage
./ArticleRead-0.1.13.AppImage
```

## 使用前准备

ArticleRead 桌面版自带应用运行环境和译文 PDF 所需的 TeX 运行时。AI 问答能力会调用你本机已经安装和登录的命令行工具：

- Claude Code：`claude`
- Codex CLI：`codex`

如果你需要 Notion 归档，请在 App 内进入设置并完成 Notion 授权。

## 当前状态

这是 ArticleRead 的公开预览发布仓，用于分发可体验的桌面安装包和介绍产品能力。核心产品仍在快速迭代，欢迎通过 Issues 反馈安装、阅读、问答或 Notion 集成中的问题。
