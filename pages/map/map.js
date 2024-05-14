// pages/map/map.js
// index.js

Page({
  data: {
    longitude: 114.364357, // 武汉大学的经度
    latitude: 30.537958,   // 武汉大学的纬度
    markers: [],
    districts: ['洪山区', '江汉区', '江岸区', '硚口区', '汉阳区', '武昌区', '青山区', '东西湖区', '黄陂区', '江夏区', '新洲区'],
    districtLocations: [
        { district: '洪山区', longitude: 114.3438, latitude: 30.5002 },
        { district: '江汉区', longitude: 114.2834, latitude: 30.5805 },
        { district: '江岸区', longitude: 114.3036, latitude: 30.5949 },
        { district: '硚口区', longitude: 114.2737, latitude: 30.6013 },
        { district: '汉阳区', longitude: 114.2199, latitude: 30.5448 },
        { district: '武昌区', longitude: 114.3075, latitude: 30.5461 },
        { district: '青山区', longitude: 114.3961, latitude: 30.6308 },
        { district: '东西湖区', longitude: 114.1501, latitude: 30.6233 },
        { district: '黄陂区', longitude: 114.3757, latitude: 30.8747 },
        { district: '江夏区', longitude: 114.3142, latitude: 30.378 },
        { district: '新洲区', longitude: 114.8023, latitude: 30.8434 }
      ],
    marklocations:[
      {name:'whu',longitude:114.364357,latitude:30.537958},
      {name:'辛亥革命武昌起义军政府旧址',longitude:114.3128259,latitude:30.54756162},
      {name:'私立武汉中学旧址',longitude:114.3185879,latitude:30.55349024},
      {name:'武汉京汉铁路工人大罢工旧址',longitude:104.090883,latitude:30.68149685},
      {name:'汉口景明大楼旧址',longitude:121.48926,latitude:31.29573133},
      {name:'日本陆军积庆里“慰安所"旧址',longitude:120.567757,latitude:31.29348385},
      {name:'姚家山新四军第五师司政机关旧址',longitude:114.0692141,latitude:30.58319608},
      {name:'鄂豫边区大达卷烟厂旧址',longitude:104.3552833,latitude:28.60452949},
      {name:'黄陂县农民协会旧址',longitude:114.382454,latitude:30.88753377},
      {name:'塔区苏维埃政府旧址',longitude:114.8812297,latitude:31.62808389},
      {name:'雷祖殿会议会址',longitude:121.4631383,latitude:29.9825485},
      {name:'姚蔡河周恩来渡河处',longitude:120.8047992,latitude:29.25412649},
      {name:'木兰山风洞',longitude:114.4029776,latitude:31.1010072},
      {name:'陈秀冲会议会址',longitude:106.9271256,latitude:27.69464277},
      {name:'李先念旧居',longitude:110.3286568,latitude:33.69660613},
      {name:'吴光浩烈士故居',longitude:121.2667576,latitude:31.75799712},
      {name:'蔡以忱烈士故居',longitude:121.4879988,latitude:31.27366945},
      {name:'晋冀鲁豫野战军司令部旧址',longitude:115.0124088,latitude:25.86999975},
      {name:'双柳冈西特别支部、冈西暴动指挥部旧址',longitude:114.6589985,latitude:30.59950101},
      {name:'将军山将军洞',longitude:113.4884863,latitude:23.15195838},
      {name:'陈田村红军树',longitude:130.2982229,latitude:47.35574788},
      {name:'汉口中华全国总工会旧址',longitude:119.2822366,latitude:25.61873389},
      {name:'中国共产党第五次全国代表大会旧址',longitude:113.655887,latitude:23.58212369},
      {name:'中国共产党第五次全国代表大会旧址（黄陂会馆）',longitude:113.655887,latitude:23.58212369},      
      {name:'武汉中央军事政治学校旧址',longitude:114.3031593,latitude:30.54546162},
      {name:'武汉中央军事政治学校南湖校区遗址',longitude:114.3233794,latitude:30.51405028},
      {name:'汉口八七会议旧址',longitude:119.2822366,latitude:25.61873389},
      {name:'汉口新四军军部旧址',longitude:119.2822366,latitude:25.61873389},
      {name:'汉口新华日报社旧址',longitude:119.2822366,latitude:25.61873389},
      {name:'武昌昙华林国民政府军事委员会政治部第三厅旧址',longitude:114.3178412,latitude:30.5574248},      
      {name:'新洲涨渡湖抗日根据地旧址',longitude:114.8059299,latitude:30.67462586},
      {name:'汉口第六战区受降堂旧址',longitude:119.2822366,latitude:25.61873389},
      {name:'武汉国民政府旧址',longitude:114.293058,latitude:30.58154302},
      {name:'首届国民参政会会址',longitude:121.9501187,latitude:29.25403629},
      {name:'苏联驻汉口领事馆旧址',longitude:123.4324591,latitude:41.78895274},
      {name:'法国领事馆旧址',longitude:104.0884251,latitude:30.66170863},
      {name:'鲁兹旧居',longitude:117.206771,latitude:39.11232312},
      {name:'武汉卫戍司令部旧址',longitude:114.3115816,latitude:30.59846674},
      {name:'武汉卫戍司令部军法处旧址',longitude:114.3772467,latitude:30.61247907},
      {name:'中央宣传部旧址暨瞿秋白旧居',longitude:116.3887737,latitude:39.91493252},
      {name:'中共中央长江局机关暨湖北省委机关旧址',longitude:121.2379828,latitude:31.84827725},
      {name:'京汉铁路总工会旧址',longitude:121.4767851,latitude:31.25952361},
      {name:'中原军区武汉办事处旧址',longitude:113.6194755,latitude:34.75445078},
      {name:'刘少奇同志旧居',longitude:105.7563021,latitude:31.53832823},
      {name:'汉口中共中央领导人住地旧址',longitude:119.2822366,latitude:25.61873389},
      {name:'宋庆龄汉口旧居',longitude:119.2822366,latitude:25.61873389},
      {name:'郭沫若旧居',longitude:106.5736177,latitude:29.55826211},
      {name:'鲍罗廷旧居暨《国民论坛》报社旧址',longitude:117.206771,latitude:39.11232312},
      {name:'长江书店旧址',longitude:106.7194141,latitude:26.52773077},
      {name:'革命里旧址',longitude:113.7146341,latitude:27.92005364},
      {name:'中华全国文艺界抗敌协会会场旧址',longitude:117.4588514,latitude:39.9351725},
      {name:'“血花世界”旧址',longitude:103.8890182,latitude:30.60391283},
      {name:'董必武旧居',longitude:114.6244267,latitude:31.29220241},
      {name:'毛泽东同志主办的中央农民运动讲习所旧址',longitude:116.5705688,latitude:39.73719834},
      {name:'中共中央军委武昌办事处旧址',longitude:113.1509923,latitude:28.19190473},
      {name:'湖北省第一次农民代表大会会址',longitude:114.3484407,latitude:30.55160006},
      {name:'文华大学女生宿舍旧址',longitude:105.7100908,latitude:28.58678229},
      {name:'周恩来同志珞珈山旧居',longitude:116.5705688,latitude:39.73719834},
      {name:'郭沫若珞珈山旧居',longitude:114.372292,latitude:30.53671933},
      {name:'陈昌浩旧居',longitude:117.206771,latitude:39.11232312},
      {name:'中共保福祠支部委员会旧址',longitude:113.1509923,latitude:28.19190473},
      {name:'武昌叶挺独立团官兵公墓',longitude:114.3225485,latitude:30.55956698},
      {name:'毛泽东同志旧居',longitude:116.013704,latitude:25.88664549},
      {name:'向警予汉口旧居',longitude:119.2822366,latitude:25.61873389},
      {name:'武昌李汉俊烈士墓',longitude:114.3225485,latitude:30.55956698},
      {name:'江汉关大楼',longitude:114.2775061,latitude:30.60728228},
      {name:'孙中山先生铜像',longitude:116.5181973,latitude:39.90010197},
      {name:'耿丹烈士墓',longitude:108.6177043,latitude:29.3241417},
      {name:'国民革命军第四军独立团北伐阵亡官兵诸烈士陵园',longitude:117.7003879,latitude:49.47118919},     
      {name:'施洋烈士陵园',longitude:114.3430901,latitude:30.53969907},
      {name:'阅马场孙中山铜像',longitude:121.4740243,latitude:31.22212475},
      {name:'陈定一烈士墓',longitude:108.6177043,latitude:29.3241417},
      {name:'九峰山革命烈士陵园',longitude:105.5892929,latitude:29.32415304},
      {name:'石门峰烈士陵园',longitude:114.4944056,latitude:30.51756801},
      {name:'朱立文烈士墓',longitude:108.6177043,latitude:29.3241417},
      {name:'张宝珍烈士墓',longitude:108.6177043,latitude:29.3241417},
      {name:'吴干臣烈士墓',longitude:108.6177043,latitude:29.3241417},
      {name:'彭贤能烈士墓',longitude:108.6177043,latitude:29.3241417},
      {name:'殷崇洲烈士墓',longitude:108.6177043,latitude:29.3241417},
      {name:'肖雅堂烈士墓',longitude:108.6177043,latitude:29.3241417},
      {name:'肖毓福烈士墓',longitude:108.6177043,latitude:29.3241417},
      {name:'刘可仁烈士墓',longitude:108.6177043,latitude:29.3241417},
      {name:'徐质夫烈士墓',longitude:108.6177043,latitude:29.3241417},
      {name:'刘慈夫烈士墓',longitude:108.6177043,latitude:29.3241417},
      {name:'彭信儒烈士墓',longitude:108.6177043,latitude:29.3241417},
      {name:'蒋天树烈士墓',longitude:108.6177043,latitude:29.3241417},
      {name:'葛震寰烈士墓',longitude:108.6177043,latitude:29.3241417},
      {name:'叶禹钟烈士墓',longitude:108.6177043,latitude:29.3241417},
      {name:'贺胜桥北伐阵亡将士陵园',longitude:110.5572696,latitude:27.41859417},
      {name:'项英铜像',longitude:117.2196181,latitude:39.13359591},
      {name:'江夏革命烈士纪念馆',longitude:114.3290734,latitude:30.33866662},
      {name:'唐义贞塑像',longitude:115.5346118,latitude:35.30422846},
      {name:'李求实塑像及陈列室',longitude:115.5346118,latitude:35.30422846},
      {name:'天子山爱国主义教育基地',longitude:110.4500992,latitude:29.40845814},
      {name:'唐际盛烈士墓',longitude:108.6177043,latitude:29.3241417},
      {name:'潘忠汝烈士墓',longitude:108.6177043,latitude:29.3241417},
      {name:'杜崇杰烈士墓',longitude:121.2667576,latitude:31.75799712},
      {name:'吴光浩、吴光荣烈士陵园',longitude:116.7882951,latitude:39.86456752},
      {name:'杨学诚烈士陵园',longitude:116.7882951,latitude:39.86456752},
      {name:'静山暴动纪念碑',longitude:118.9668052,latitude:32.04182732},
      {name:'甲山寺革命烈士纪念碑',longitude:110.281747,latitude:25.29687658},
      {name:'刘天元烈士墓',longitude:108.6177043,latitude:29.3241417},
      {name:'凤凰革命烈士纪念园',longitude:109.6055267,latitude:27.95384781},
      {name:'涨渡湖抗日根据地纪念碑',longitude:114.8059299,latitude:30.67462586},
      {name:'李集革命烈士纪念碑',longitude:114.039688,latitude:33.69906756},
      {name:'李紫苏区革命烈士纪念碑',longitude:111.667365,latitude:40.87335895},
      {name:'徐古革命烈士纪念碑',longitude:114.9841717,latitude:30.95234297},
      {name:'郝梦龄墓',longitude:114.3774351,latitude:30.52319027},
      {name:'刘家麒故居',longitude:116.6826274,latitude:23.35917831},
      {name:'林家大湾反抗日寇暴行纪念碑',longitude:121.3145698,latitude:31.15245737},
      {name:'中山舰纪念馆',longitude:117.0589147,latitude:38.61449622},
      {name:'新洲城五八惨案纪念碑',longitude:114.8075434,latitude:30.84724387},
      {name:'武汉大学六一惨案旧址',longitude:114.3816974,latitude:30.54391085},
      {name:'蔡甸侏儒山战役遗址',longitude:113.8557168,latitude:30.44642168},
      {name:'中共中央组织部遗址',longitude:116.385514,latitude:39.91257067},
      {name:'中共中央暂留武汉交通处遗址',longitude:114.298677,latitude:30.59711981},
      {name:'中共中央长江局国际宣传组遗址',longitude:121.2379828,latitude:31.84827725},
      {name:'中共汉口地委遗址',longitude:113.1509923,latitude:28.19190473},
      {name:'中共湖北省委机关遗址',longitude:113.1509923,latitude:28.19190473},
      {name:'汉口人力车夫工会遗址',longitude:119.2822366,latitude:25.61873389},
      {name:'中共中央暂留武汉交通处遗址',longitude:114.298677,latitude:30.59711981},
      {name:'中共汉阳县委机关遗址',longitude:114.2254456,latitude:30.56005203},
      {name:'汉冶萍总工会成立大会遗址',longitude:104.123769,latitude:30.66693183},
      {name:'中华全国农民协会遗址',longitude:116.5233827,latitude:39.96067024},
      {name:'国民革命军第24师师部遗址',longitude:113.8370626,latitude:35.08024762},
      {name:'中共湖北区委机关遗址',longitude:113.1509923,latitude:28.19190473},
      {name:'中共武汉区委机关遗址',longitude:113.1509923,latitude:28.19190473},
      {name:'利群书社遗址',longitude:121.405715,latitude:31.24949768},
      {name:'孙中山纪念碑位',longitude:113.2707352,latitude:23.14230449},
      {name:'汉阳中心区苏维埃政府成立地遗址',longitude:114.2254456,latitude:30.56005203},
      {name:'川阳游击大队建军典礼地遗址',longitude:113.8992987,latitude:22.81338668},
      {name:'七萧大湾暴动动员会遗址',longitude:121.6959524,latitude:31.25253775},
      {name:'中共武昌县委员会遗址',longitude:114.3224418,latitude:30.55959645},
      {name:'平息夏斗寅叛乱战场遗址',longitude:109.358629,latitude:25.52359175},
      {name:'中共黄陂三合店支部遗址',longitude:113.1509923,latitude:28.19190473},
      {name:'罗家岗战斗遗址',longitude:103.6733513,latitude:31.07521773},
      {name:'新李湾战斗遗址',longitude:114.8610676,latitude:32.5529129},
      {name:'双凤亭日寇刑场遗址',longitude:114.2200367,latitude:22.5801167},
      {name:'坦教湖惨案遗址',longitude:117.0235394,latitude:36.66911534},
      {name:'余记里革命烈士就义处',longitude:113.952088,latitude:22.76750404}

    ],
      
    itemWidth: '25%' // 设置每个滑块的宽度为导航栏宽度的四分之一
  },
  onReady() {
    // 设置初始显示位置为武汉大学
    this.mapCtx = wx.createMapContext('map'); // 获取地图组件上下文
    this.mapCtx.includePoints({
      points: [{ longitude: this.data.longitude, latitude: this.data.latitude }],
      padding: [100] // 地图 padding，即地图边缘留白区域
    });

    // 调用高德地图API获取地图数据
    wx.request({
      url: 'https://restapi.amap.com/v3/place/around?key=1fc06255cc4659dd13651272c7249379&location=114.364357,30.537958&radius=1000&types=050000&offset=10&page=1&extensions=all',
      success: (res) => {
        const pois = res.data.pois;
        const markers = pois.map((poi) => ({
          id: poi.id,
          longitude: poi.location.split(',')[0],
          latitude: poi.location.split(',')[1],
          title: poi.name,
          iconPath: '/images/location.png', // 自定义图标路径
          width: 20,
          height: 20
        }));
        this.setData({ markers });
      },
      fail: (err) => {
        console.error('请求高德地图API失败：', err);
      }
    });
    // 标记marklocations中的地点
      const markers = this.data.marklocations.map((location, index) => ({
        id: index,
        longitude: location.longitude,
        latitude: location.latitude,
        title: location.name,
        iconPath: '/images/location.png', // 自定义图标路径
        width: 20,
        height: 20
      }));
      this.setData({ markers });
    
      // 获取高德地图SDK
    const amapFile = require('../../libs/amap-wx.js');

    // 使用您在高德开发者平台注册的API密钥
    const myAmapFun = new amapFile.AMapWX({ key: '1fc06255cc4659dd13651272c7249379' });

    // 调用路径规划接口
    myAmapFun.getDrivingRoute({
      origin: '114.364357,30.537958', // 修改为字符串格式
      destination: '114.3128259,30.54756162', // 修改为字符串格式
      success: function(data){
        // 解析路径规划结果
        if(data.paths && data.paths[0] && data.paths[0].steps){
          const steps = data.paths[0].steps;
          const points = [];
          for(let i = 0; i < steps.length; i++){
            const polyline = steps[i].polyline.split(';');
            for(let j = 0; j < polyline.length; j++){
              points.push({
                longitude: parseFloat(polyline[j].split(',')[0]),
                latitude: parseFloat(polyline[j].split(',')[1])
              });
            }
          }
          // 在地图上绘制路线
          const mapCtx = wx.createMapContext('map');
          mapCtx.includePoints({
            points: points,
            padding: [50]
          });
          mapCtx.moveToLocation();

          this.setData({
            polylines: [{
              points: points,
              color: "#FF0000DD", // 线条颜色
              width: 2, // 线条宽度
              dottedLine: false // 是否为虚线
            }]
          });
          
        }
      },
      fail: function(info){
        wx.showToast({ title: '路径规划失败', icon: 'none' });
      }
    });
  },

  navigateToDistrict(event) {
    // 获取点击滑块对应的县级行政区名称
    const district = event.currentTarget.dataset.district;

    // 根据县级行政区名称获取对应的经纬度坐标
    const location = this.data.districtLocations.find(item => item.district === district);
    if (location) {
      // 调用地图组件的 moveToLocation 方法将地图移动到该位置
      this.setData({
        longitude: location.longitude,
        latitude: location.latitude
      });      
      this.mapCtx.moveToLocation({
        longitude: location.longitude,
        latitude: location.latitude,
        success: () => {
          console.log(`地图已移动到 ${district} 的人民政府所在地`);
        },
        fail: (err) => {
          console.error('移动地图失败：', err);
        }
      });
    } else {
      console.error(`未找到 ${district} 的人民政府所在地的经纬度`);
    }
  },

  
});


