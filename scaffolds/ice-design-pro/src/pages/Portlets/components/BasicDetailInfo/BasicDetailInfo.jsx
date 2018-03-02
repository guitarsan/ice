import React, { Component } from 'react';
import IceContainer from '@icedesign/container';

/**
 * 渲染详情信息的数据
 */
const dataSoruce = {
  title: '集盒家居旗舰店双十一活动',
  shopName: '集盒家居旗舰店',
  amount: '1000.00',
  bounty: '200.00',
  orderTime: '2017-10-18 12:20:07',
  deliveryTime: '2017-10-18 12:20:07',
  phone: '15612111213',
  address: '杭州市文一西路',
  status: '进行中',
  remark: '暂无',
  pics: [
    'https://img.alicdn.com/imgextra/i3/672246894/TB2ziLDdbsTMeJjSszdXXcEupXa_!!672246894-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp',
    'https://img.alicdn.com/imgextra/i1/2645911918/TB2qQA9fk.HL1JjSZFuXXX8dXXa_!!2645911918-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp',
    'https://img.alicdn.com/bao/uploaded/TB2obaBXeLyQeBjy1XaXXcexFXa_!!0-dgshop.jpg_180x180xzq90.jpg_.webp',
    'https://img.alicdn.com/tps/i1/99136475/TB2Cc7saE1HTKJjSZFmXXXeYFXa_!!0-juitemmedia.jpg_180x180q90.jpg_.webp',
  ],
};

export default class BasicDetailInfo extends Component {
  static displayName = 'BasicDetailInfo';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="basic-detail-info">
        <IceContainer>
          <h2 style={styles.basicDetailTitle}>基础详情页</h2>
          <div style={styles.infoColumn}>
            <h5 style={styles.infoColumnTitle}>基本信息</h5>
            <ul style={styles.infoItems}>
              <li style={styles.infoItem}>
                <span style={styles.infoItemLabel}>任务标题：</span>
                <span style={styles.infoItemValue}>{dataSoruce.title}</span>
              </li>
              <li style={styles.infoItem}>
                <span style={styles.infoItemLabel}>店铺名称：</span>
                <span style={styles.infoItemValue}>{dataSoruce.shopName}</span>
              </li>
              <li style={styles.infoItem}>
                <span style={styles.infoItemLabel}>任务金额：</span>
                <span style={styles.infoItemValue}>¥ {dataSoruce.amount}</span>
              </li>
              <li style={styles.infoItem}>
                <span style={styles.infoItemLabel}>任务赏金：</span>
                <span style={styles.infoItemValue}>¥ {dataSoruce.bounty}</span>
              </li>
              <li style={styles.infoItem}>
                <span style={styles.infoItemLabel}>接单时间：</span>
                <span style={styles.infoItemValue}>{dataSoruce.orderTime}</span>
              </li>
              <li style={styles.infoItem}>
                <span style={styles.infoItemLabel}>交付时间：</span>
                <span style={styles.infoItemValue}>
                  {dataSoruce.deliveryTime}
                </span>
              </li>
            </ul>
          </div>
          <div style={styles.infoColumn}>
            <h5 style={styles.infoColumnTitle}>更多信息</h5>
            <ul style={styles.infoItems}>
              <li style={styles.infoItem}>
                <span style={styles.infoItemLabel}>联系方式：</span>
                <span style={styles.infoItemValue}>{dataSoruce.phone}</span>
              </li>
              <li style={styles.infoItem}>
                <span style={styles.infoItemLabel}>收货地址：</span>
                <span style={styles.infoItemValue}>{dataSoruce.address}</span>
              </li>
              <li style={styles.infoItem}>
                <span style={styles.infoItemLabel}>任务状态：</span>
                <span style={styles.infoItemValue}>{dataSoruce.status}</span>
              </li>
              <li style={styles.infoItem}>
                <span style={styles.infoItemLabel}>备注：</span>
                <span style={styles.infoItemValue}>{dataSoruce.remark}</span>
              </li>
              <li style={styles.infoItem}>
                <span style={styles.attachLabel}>附件：</span>
                <span>
                  {dataSoruce.pics &&
                    dataSoruce.pics.length &&
                    dataSoruce.pics.map((pic, index) => {
                      return (
                        <img
                          key={index}
                          src={pic}
                          style={styles.attachPics}
                          alt="图片"
                        />
                      );
                    })}
                </span>
              </li>
            </ul>
          </div>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  basicDetailTitle: {
    margin: '10px 0',
    fontSize: '16px',
  },
  infoColumn: {
    marginLeft: '16px',
  },
  infoColumnTitle: {
    margin: '20px 0',
    paddingLeft: '10px',
    borderLeft: '3px solid #3080fe',
  },
  infoItems: {
    overflow: 'hidden',
    padding: 0,
    marginLeft: '25px',
  },
  infoItem: {
    float: 'left',
    width: '50%',
    marginBottom: '18px',
    listStyle: 'none',
    fontSize: '14px',
  },
  infoItemLabel: {
    minWidth: '70px',
    color: '#999',
  },
  infoItemValue: {
    color: '#333',
  },
  attachLabel: {
    minWidth: '70px',
    color: '#999',
    float: 'left',
  },
  attachPics: {
    width: '80px',
    height: '80px',
    border: '1px solid #eee',
    marginRight: '10px',
  },
};
