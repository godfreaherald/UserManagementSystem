
var supertest = require('supertest');
var expect = require('chai').expect;

    var host = supertest.agent("http://localhost:4000");
	
	describe("Homepage Accessibility Test",function(){
	
	it("should return homepage",function(done){
	
	host
	.get('/')
	.expect("Content-type",/text/)
	.expect(200)
	.end(function(err,res){
	expect(res.status).to.be.equal(200);
	done();
	
	});
	
	});
	});