/**
 * Created by yanshi on 1/14/15.
 */
Ext.define('Catana.view.overview.FundHistory', {
    extend: 'Catana.component.Panel',
    requires: [
        'Catana.store.myaccount.AccountHistoryStore',
        'Catana.component.chart.ux.Highcharts'
    ],
    xtype: 'account-history',
    title: 'Fund History',

    initComponent: function () {
        var chartStore = Ext.create('Catana.store.myaccount.AccountHistoryStore');
        this.items = [
            {
                xtype: "highchart",
                store: chartStore,
                series: [
                    {
                        dataIndex: 'amount',
                        name: 'Amount'
                    }
                ],
                xField: 'date',
                chartConfig: {
                    chart: {
                        type: 'area'
                    },
                    legend: {
                        enabled: false
                    },
                    xAxis: {
                        labels: {
                            formatter: function () {
                                return Ext.util.Format.date(this.value, 'm/d')
                            }
                        }
                    },
                    tooltip: {
                        formatter: function() {
                            return  '<b>' + Ext.util.Format.date(this.x, 'm/d/y') +'</b><br/>'
                                + Ext.util.Format.usMoney(this.y);
                        }
                    }
                }
            }
        ];

        //TODO: when there is enough data, we will bring this time filter back
        /*this.tbar = [
            {
                xtype: 'segmentedbutton',
                items: [
                    {
                        itemId: 'oneYear',
                        text: '1Y'
                    },
                    {
                        itemId: 'sixMonth',
                        text: '6M'
                    },
                    {
                        itemId: 'oneMonth',
                        text: '1M'
                    },
                    {
                        itemId: 'oneWeek',
                        text: '1W',
                        pressed: true
                    }
                ]
            },

        ];*/
        this.callParent(arguments);
    }
});