<?php

require_once(__DIR__ ."/model.php");
/**
 * @OA\Schema()
 */
	class Service extends Model{

 		function __construct() {
      	$this->table = "service";
        $this->primary = "idservice";
    	}

   	/**
		     * The service idservice
			 * @var integer
			 * @OA\Property()
			 */
			 public $idservice;
			 /**
		     * The service libelleservice
			 * @var string
			 * @OA\Property()
			 */
			 public $libelleservice;
			 /**
		     * The service prixservice
			 * @var float
			 * @OA\Property()
			 */

  	 	 public $prixservice;
			 /**
				 * The service catigorieservice
			 * @var string
			 * @OA\Property()
			 */
			 public $categorie_service;



	}

?>
