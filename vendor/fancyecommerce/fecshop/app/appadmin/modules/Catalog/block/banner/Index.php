<?php
namespace fecshop\app\appadmin\modules\Catalog\block\banner;

use fec\helpers\CUrl;
use fecshop\app\appadmin\interfaces\base\AppadminbaseBlockInterface;
use fecshop\app\appadmin\modules\AppadminbaseBlock;
use Yii;

class Index extends AppadminbaseBlock implements AppadminbaseBlockInterface
{

    public function init()
    {
        $this->_editUrl = CUrl::getUrl('catalog/banner/manageredit');
        $this->_deleteUrl = CUrl::getUrl('catalog/banner/managerdelete'); //delete data url

        $this->_service = Yii::$service->product->banner;
        parent::init();
    }

    public function getLastData()
    {
        // hidden section ,that storage page info
        $pagerForm = $this->getPagerForm();
        // search section
        $searchBar = $this->getSearchBar();
        // edit button, delete button,
        $editBar = $this->getEditBar();
        // table head
        $thead = $this->getTableThead();
        // table body
        $tbody = $this->getTableTbody();
        // paging section
        $toolBar = $this->getToolBar($this->_param['numCount'], $this->_param['pageNum'], $this->_param['numPerPage']);

        return [
            'pagerForm' => $pagerForm,
            'editBar' => $editBar,
            'thead' => $thead,
            'tbody' => $tbody,
            'toolBar' => $toolBar,
        ];
    }

    /**
     * get search bar Arr config.
     */
    public function getSearchArr()
    {
        $data = [];
        return $data;
    }

    /**
     * config function ,return table columns config.
     */
    public function getTableFieldArr()
    {
        $table_th_bar = [
        ];
        return $table_th_bar;
    }

}
