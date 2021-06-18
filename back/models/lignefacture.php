<?php

require_once(__DIR__ ."/model.php");
/**
 * @OA\Schema()
 */
	class Lignefacture extends Model{

 		function __construct() {
      	$this->table = "lignefacture";
        $this->primary = "idlignefacture";
    	}

   	/**
		     * The lignefacture idlignefacture
			 * @var integer
			 * @OA\Property()
			 */
			 public $idlignefacture;
			 /**
		     * The lignefacture facture_id_facture
			 * @var integer
			 * @OA\Property()
			 */
			 public $facture_id_facture;
			 /**
		     * The lignefacture prestataire_idprestataire
			 * @var integer
			 * @OA\Property()
			 */
			 public $prestataire_idprestataire;
			 /**
		     * The lignefacture service_idservice
			 * @var integer
			 * @OA\Property()
			 */
			 public $service_idservice;
			 /**
				* The lignefacture service_idservice
			* @var float
			* @OA\Property()
			*/
			public $prix_total;
			/**
			 * The lignefacture service_idservice
		 * @var integer
		 * @OA\Property()
		 */
		 public $quantite_service;


	}

?>
