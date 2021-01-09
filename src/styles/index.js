/* eslint-disable camelcase */
import { Dimensions } from 'react-native'
import colors from './colors'

const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

const styles = {
  colorWhite: {
    color: colors.white
  },
  colorSilver: {
    color: colors.grey
  },
  colorRed: {
    color: colors.red
  },
  colorOrange: {
    color: colors.orange
  },
  p10: {
    padding: 10
  },
  p20: {
    padding: 20
  },
  p30: {
    padding: 30
  },
  ml10: {
    marginLeft: 10
  },
  mt5: {
    marginTop: 5
  },
  mt10: {
    marginTop: 10
  },
  mt20: {
    marginTop: 20
  },
  mt30: {
    marginTop: 30
  },
  mb10: {
    marginBottom: 10
  },
  mb20: {
    marginBottom: 20
  },
  mb30: {
    marginBottom: 30
  },
  mb50: {
    marginBottom: 50
  },
  mt40: {
    marginTop: 40
  },
  mr10: {
    marginRight: 10
  },
  hidden: {
    width: 1,
    height: 1
  },
  divider: {
    height: 1,
    backgroundColor: colors.peppermint,
    marginTop: 30,
    marginBottom: 30
  },
  fullWidth: {
    width: '100%'
  },
  flex1: {
    flex: 1
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexCol: {
    flexDirection: 'column'
  },
  alignStart: {
    alignSelf: 'flex-start'
  },
  alignCenter: {
    alignSelf: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  textCenter: {
    textAlign: 'center'
  },
  textSemiBold: {
    fontWeight: '600'
  },
  textBold: {
    fontWeight: 'bold'
  },
  textWhiteTitle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold',
    color: colors.white
  },
  textWhiteRegular: {
    fontSize: 14,
    lineHeight: 24,
    color: colors.white
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
    color: colors.blackForest
  },
  textUnderLine: {
    textDecorationLine: 'underline',
    color: colors.gradient
  },
  textDarkTitle: {
    fontSize: 20,
    lineHeight: 24,
    color: colors.dark
  },
  textDarkMedium: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.dark
  },
  textDarkRegular: {
    fontSize: 14,
    lineHeight: 24,
    color: colors.dark
  },
  textGreyTitle: {
    fontSize: 20,
    lineHeight: 24,
    color: colors.grey
  },
  textGreyRegular: {
    fontSize: 14,
    lineHeight: 24,
    color: colors.grey
  },
  textRegular: {
    fontSize: 14,
    lineHeight: 24,
    color: colors.grey
  },
  textRegularSmall: {
    fontSize: 12,
    lineHeight: 24,
    color: colors.grey
  },
  textBlackRegular: {
    fontSize: 14,
    color: colors.blackForest
  },
  textBlackMedium: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.blackForest
  },
  textGradientRegular: {
    fontSize: 14,
    lineHeight: 24,
    color: colors.gradient,
    fontWeight: 'bold'
  },
  textError: {
    marginVertical: 5,
    fontSize: 12,
    color: colors.red
  },
  line: {
    borderBottomWidth: 1,
    borderColor: colors.light,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 30
  },
  containerPage: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  containerContent: {
    justifyContent: 'center',
    paddingHorizontal: 39,
    paddingVertical: 24
  },
  fixedBottom: {
    width: '100%',
    position: 'absolute',
    bottom: 0
  },
  justifyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerSearchMaps: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: '100%',
    top: 60,
    right: 0,
    left: 0,
    justifyContent: 'center',
    paddingHorizontal: 35,
    position: 'absolute',
    zIndex: 1
  },
  textSearchMaps: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    borderWidth: 1,
    borderColor: colors.lavenderGrey,
    borderRadius: 4,
    width: '100%',
    color: '#5d5d5d',
    fontSize: 16,
    position: 'absolute',
    height: 45,
    zIndex: 1
  },
  listViewMaps: {
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    zIndex: 1,
    elevation: 3,
    backgroundColor: colors.white
  },
  markerConsumer: {
    height: 70
  },
  zIndex1: {
    zIndex: 1
  }
}

export {
  styles,
  colors,
  dimensions
}