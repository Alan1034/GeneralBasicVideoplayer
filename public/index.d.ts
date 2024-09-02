/*
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2023-11-07 17:55:59
 * @LastEditTime: 2024-09-02 18:40:20
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \GeneralBasicVideoplayer\public\index.d.ts
 * 
 */
/// <reference types="vite/client" />
declare module "*.vue" {
  import { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module "general-basic-videoplayer";