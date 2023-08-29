import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import React, { PureComponent } from 'react'
import { Button } from "@nutui/nutui-react-taro"

import './index.styl'

// 使用 definePageConfig 定义的页面配置对象不能使用变量
definePageConfig({
  navigationBarTitleText: '测试页面C',
})

export default class TestC extends PureComponent<any, any> {
  handleGoBack = () => {
    Taro.navigateBack()
  }

  render() {
    return (
      <View className="test-c">
        <View className="index">
          测试页面 C
        </View>
        <View className="index">
          <Button
            type="primary"
            className="btn"
            onClick={this.handleGoBack}
          >
            返回上一页
          </Button>
        </View>
      </View>
    )
  }

}
