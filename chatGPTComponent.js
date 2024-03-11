<template>
	<div class="spinner">
		<template if:true={isLoading}>
			<lightning-spinner alternative-text="Loading" variant="brand" size="large">
			</lightning-spinner>
		</template>
	</div>
	<lightning-card variant="narrow" icon-name="standard:opportunity">

		<h1 slot="title">Heeelloo this is NIGGA CHAT GPT ASSISTANT !!!</h1>
	

		

		<div slot="footer">
			<div class="additional-container"></div>
			<div class="slds-p-around_medium lgc-bg">
				<lightning-input type="text" label="How Can I help you?" onchange={handleInputChange}></lightning-input>
			</div>

			<lightning-button variant="brand" label="Search" title="Primary action" onclick={handleClickSearch}
				class="slds-m-left_x-small">
			</lightning-button>
		</div>
	</lightning-card>




</template>
