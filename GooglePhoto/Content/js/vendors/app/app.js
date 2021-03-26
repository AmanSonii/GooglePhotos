
var myApp = angular.module('myApp', ['ui.bootstrap', 'angular-loading-bar', 'lk-google-picker', 'ngImgCrop', 'ngCookies']).config(config).run(run);

    config.$inject = ['lkGoogleSettingsProvider'];
    function config(lkGoogleSettingsProvider) {
        // Configure the API credentials here
        lkGoogleSettingsProvider.configure({
            apiKey: 'AIzaSyDSPGwLpJ4cLRP7Hq50K4FaPNeTTLYyWhw',
            clientId: '583660645774-2tq87qeia88vml1q9qsi893jii12nls4.apps.googleusercontent.com',
            //scopes: ['https://www.googleapis.com/auth/photos'],
            scopes: ['https://www.googleapis.com/auth/photoslibrary', 'https://www.googleapis.com/auth/photoslibrary.readonly', 'https://www.googleapis.com/auth/photoslibrary.readonly.appcreateddata'],
            features: [''],
            views: ['DocsView(google.picker.ViewId.PHOTOS)'] 
            //views: ['PhotosView()']
            
        });
}

run.$inject = ['$rootScope', '$location', '$cookieStore'];
function run($rootScope, $location, $cookieStore) {
    $(document).ready(function () {
        console.log('angular started.');
    });
}

myApp.controller("rootController", function ($scope, $window) {
    $scope.onLoaded = function () {
        
    };
    $scope.newProduct = {};
    $scope.newProduct.ProductImagesUrl = ['https://lh3.googleusercontent.com/-dbN6SD_Hn5E/Xs9PjGlGqnI/AAAAAAAAAFw/3y_kbTyVonQoK8YktAhHElbDshaOLGjVACE0YBhgLKqkEAL1OcqyYos49ptQij2NVDGZY11y7N9fLmXqiC27ikR8xJlM0RQvxhGdW4HvJHiWliXi8WRF92aS4Ywllyt4GGEsq9jf0ASAE9XIlPx1cmy1Mp_9A0MkeagiHSv74HnjDPsqB8dqtQr8K2sruW0E_GlAh9G9ErDsKbLqzwv9UGBI1trMfDg1pcHAfz5qTrC9jc3N3rEfHuEF-0j10DiRuKta5b-DVomaSM-Q2n_ZBlgV9T3_9TUzqL_uQ9ZhEDcI1-B00gA6Cb-tLilBsHbHbx7ZF-CNEpCe027T3qnBPo-UTg8zjr2PheMrsbif5-kzBL8rXpWVggyZo19VlKwjNKuJLYQkg2MxilJET1J1h_lbkmcO6D1TTE5OTRZBb38zN2xxMCw-k_CzRKOySt-1VFhRr2nNbeUsCyFe1wV-i_uFDlBdOnfY8f7GKHGws3YWCSjpjAcEmvPEuPX7LB8oHNrKSoLxed2iKcvf1W-rqUOWfVgO8frWhPBaxOHDrOm73yy_His_VI45ZYhgMwZqm4vjDIDGv9v-66NyqmKb6L6iKpCF1ZBHFap6m6PIigElgtmJGlX4jS8TC_Z-_RtfaTJDnmg2ft83IvbQY4RlVBqAYlnVLAXobowR87pgmJC0V7eXIPVS_93c6_MSzTRuR-EK8sCUX0ng7H_mJEYa4Rs_6Q86fuvF4-0zJhk9mqkBrab1j099BnCbeycYUStrjNbhVBb6Q6uIKADDqy7_2BQ/s320/liviu-florescu-Ufw3tdWujlY-unsplash.jpg',
                                          'https://lh3.googleusercontent.com/-mXrlulgrM5c/XtCbywR2kpI/AAAAAAAAAGQ/d-OauRLe4OQ23JznQhW45puu8DbPyDBZACE0YBhgLKqkEAL1OcqymdNiZpeP9tCVmp_-_UvOScycDwurLYV7SauRUGvHTHOvwZiVJqaHT_Et3zJsf6f-ydxTsV4uzMVjy2Kh1ZR4sYvjWGSCru2vTOl6msNIWRcDLEdbIsKeLky6THp27so8YDLeAG_Wys1_sk0gGBPs_1sAoDJ32suKmPjmxueaz4-FIha1zFVAqZnodT-KqSwTX_SLZpYOfxlU6Zg2hjgE-EGB-oz9tdFX8amXZJNPEYyI_zH8kXsuKNiLpG24PZliojYrWvQiAv7bK2gVngZC_NyA9D8k2cCuJ3kYNenKzkyGAfkghpwtHrx2h9n_OVD4KET2CXTozcbY2Gz66AAyTFE_boQOHvAmS9RdywkMv0FPEudxUKPiyQaq-z9k016XouRtA1XW_QfjF90pHeo9LKl8qStFyZBmhjSjq82Qn-la5XmdRXAoB7vHtCLyTrN2hjHb0Cn-8pFurIcuzWO5YZNGo9lfdovTlecAGDwIhgLf6mcpLAP-fX9FRTUWhcjHb7a95Rsq9FXp9lyGvBv_y6wchqJWd8e6orhhTjABAJKPDpIkNvh__ptwffKYTqtECcSJXjxcYwWiQ7gwmIYfRMiSCIoWUgvwYbSvZhTfgM9-lhSL2t_yZBo04_T9yasirKHxhrAwptwgHv43Efy4yLIQtx83UPScKyXEXZa07lVdhtgrsSyqkgMVEkYtk1bFzXzOxM1bNAdJ2ec2-4Jaegkw3EzCZusL2BQ/s320/pedro-lastra-DiBu1qTQQ8s-unsplash.jpg'];
    $scope.onPicked = function (docs) {

        angular.forEach(docs, function (file, index) {
            var imageName = file.name;
            var thumbsLength = file.thumbnails.length;
            var imageUrl = file.thumbnails[thumbsLength - 1].url;
            var replaceWith = 's320/' + imageName;
            var finalImageUrl = imageUrl.replace(imageName, replaceWith);
            
            $scope.newProduct.ProductImagesUrl.push(finalImageUrl);
        });
        //  checkImage();
    };

    $scope.onCancel = function () {
    };
})
