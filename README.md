# 前端训练项目一 ：AI对话页面仿写

## 前置
- **目的**：复刻DeepSeek网页端
- **技术**：Vite + Vue3 + JavaScript
- **工具**：VSCode

## 步骤

1. 创建项目
   首先需要使用npm创建一个Vite项目
    
    ```bash
    npm create vite@latest
    ```

    之后会提示输入项目名称(Project name)和包名称(Package name)，接着选择框架，这里选择`Vue`，接着选择`JavaScript`，最后选择`Yes`，即可完成项目创建。

    想启动项目时，在项目目录路径下运行终端，输入下述命令来启动项目。

    ```bash
    npm run dev
    ```

    项目启动后，会在默认浏览器中打开项目页面，默认地址为`http://localhost:5173/`。

## 过程
整体步骤顺序大概就是先制作出两个板块，侧边栏和对话区，然后是输入框和按钮，接着做出了AI回复，最后完善细节，比如AI回复下面的复制赞踩重新生成，停止生成等。

中间经历了数不清次数的代码重构，一开始是各自为阵的，后来就开始捆绑销售，整合在一起

## 备注
1. **网页主要布局**参考于以下网站
    - [DeepSeek](https://deepseek.com/)
    - [豆包](www.doubao.com/)

2. **按钮**组件和**输入框**组件样式以及**图标**参考于以下网站
    - [neumorphism.io](https://neumorphism.io/)
    - [uiverse.io](https://uiverse.io/)
    - [Ionic](https://ionic.io/ionicons)