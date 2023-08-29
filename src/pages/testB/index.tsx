import { View, ScrollView } from '@tarojs/components'
import React, { PureComponent } from 'react'
import { Button } from "@nutui/nutui-react-taro"

import './index.styl'

// 使用 definePageConfig 定义的页面配置对象不能使用变量
definePageConfig({
  navigationBarTitleText: '测试页面B',
})

export default class TestB extends PureComponent<any, any> {
  state = {
    list: [{}, {}, {}, {}, {}, {}, {}, {}],
    scrollTop: 0,
  }

  handleDeleteItem = index => {
    const {
      list
    } = this.state

    list.splice(index, 1)

    this.setState({
      list: [...list]
    })
  }

  handleScrollToLower = () => {
    const {
      list
    } = this.state

    list.push({})

    this.setState({
      list: [...list]
    })
  }

  render() {
    const {
      list,
      scrollTop,
    } = this.state

    return (
      <View className="test-b">
        <View className="header">
          列表共计 {list.length} 项
        </View>
        <ScrollView
          className='test-scroll-view'
          scrollY
          scrollTop={scrollTop}
          enableFlex
          lowerThreshold={200}
          showScrollbar={false}
          scrollWithAnimation
          onScrollToLower={this.handleScrollToLower}
        >
          {
            list.map((item, index) => {
              return (
                <View
                  className="list-item"
                  key={index}
                >
                  第 {index + 1} 项

                  <Button
                    type="primary"
                    className="btn"
                    onClick={() => {
                      this.handleDeleteItem(index)
                    }}
                  >
                    删除
                  </Button>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }

}
