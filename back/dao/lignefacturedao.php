 <?php

require_once(__DIR__ ."/../models/lignefacture.php");

  class LignefactureDao extends Lignefacture{



    function __construct($data) {

		parent::__construct();
		if($data != null){
			foreach($data as $property => $value) {
			  if(property_exists("Lignefacture" , $property)){
				$this->$property = $value;
			  }
			}
			foreach($this as $property => $value) {
			  if(!isset($data->$property) && $property != "primary" && $property != "table" && $property != $this->primary){
				unset($this->$property);
			  }
			}
		}
    }

    function getall(){
      /* get all the element of the table */
      $data = $_GET ;
      $params = (!empty($data["query"]) ) ? (array) json_decode($data["query"]) : [];
      $pageno = (!empty($data["page"]) ) ? (int) $data["page"] : 1;
      $perpage = (!empty($data["limit"]) && $data["limit"] != -1 ) ? (int) $data["limit"] : 10;
      $offset = ($pageno-1) * $perpage;
      $limit = (!empty($data["limit"]) && $data["limit"] != -1 ) ? "LIMIT $offset , $perpage" : "";
      $p = array();
      foreach ($params as $key => $value) {

          array_push($p , $key." LIKE :$key ");

          $value = str_replace("*","%",$value);
          $value = str_replace(" ","%",$value);
          $params[$key] = "%$value%";
      }
      $orderby = "";
      if(!empty($data["orderBy"])){
        $orderby = ( $data["ascending"] == 0 ) ? "ORDER BY ".$data['orderBy']." DESC" : "ORDER BY ".$data['orderBy']." ASC";
      }
      $where = (!empty($p)  ) ? implode(' AND ', $p) : '1';
      $sql ="SELECT COUNT(*) FROM $this->table WHERE $where" ;
      $stmt1 = $this->requette($sql,$params);
      $count = $stmt1["stmt"]->fetch();
      $p = $where.' '.$orderby.' '.$limit;
      if(empty($data["limit"]) || $data["limit"] == 1 ){
        $sql = "SELECT * FROM vservices WHERE ".$p;
        $stmt = $this->requette($sql);
        $res = $stmt["stmt"]->fetchALL(PDO::FETCH_CLASS , 'Lignefacture');
        return $res;
      //  return $this->select($this->table , $p);
      }else{
        $sql = "SELECT * FROM vservices WHERE ".$p;
        $stmt = $this->requette($sql, $params);
        $res = $stmt["stmt"]->fetchALL(PDO::FETCH_CLASS , 'Lignefacture');

        return ['data' => $res , 'count' => $count[0]];
      }

    }





}

?>
